import S from '@sanity/desk-tool/structure-builder'
import {
  GoFile as Doc,
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
  GoPerson as AuthorIcon
} from 'react-icons/lib/go'

import PreviewIFrame from '../components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
  Doc
}

const content = S.listItem()
  .title('Pages')
  .icon(Doc)
  .child(
    S.list()
      .title('/content')
      .items([
        S.listItem()
          .title('Published content')
          .schemaType('content')
          .icon(Doc)
          .child(
            S.documentList('contents')
              .title('Published contents')
              .menuItems(S.documentTypeList('content').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "content" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('content')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('content')
          .title('All contents')
          .icon(AllIcon),
        S.listItem()
          .title('content by category')
          .child(
            // List out all categories
            S.documentTypeList('category')
              .title('content by category')
              .child(catId =>
                // List out project documents where the _id for the selected
                // category appear as a _ref in the project’s categories array
                S.documentList()
                  .schemaType('content')
                  .title('contents')
                  .filter('_type == "content" && $catId in categories[]._ref')
                  .params({catId})
              )
          ),
        S.divider(),
        S.documentTypeListItem('category').title('Categories')
      ])
  )

export default content
