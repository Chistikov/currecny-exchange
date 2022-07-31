import { AnnouncementListItem } from 'components/ui/AnnouncementListItem/AnnouncementListItem'
import { StyledContentContainer, StyledAnnouncementsList, StyledBlockTitle } from './styled'


export default function ContentContainer() {
  return (
    <StyledContentContainer>
      <StyledBlockTitle>Announcements</StyledBlockTitle>
      <StyledAnnouncementsList>
        <AnnouncementListItem/>
      </StyledAnnouncementsList>
    </StyledContentContainer>
  )
}