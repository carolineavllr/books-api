import styled from "styled-components"

export const Modal = ({ volumeInfo, show, onClose = () => { } }) => (
  <ModalContainer show={show}>
    <Wrapper>
      <Header>
        <img
          alt={volumeInfo?.title}
          src={volumeInfo?.imageLinks?.thumbnail} />
        <Title>
          <h2>{volumeInfo?.title}</h2>
          <div className="authors">
            {(volumeInfo?.authors || []).map((author) => {
              return (
                <span>{author}</span>
              )
            })}
          </div>
          <div className="date">{volumeInfo?.publishedDate}</div>
          <div className="categories">
            {(volumeInfo?.categories || []).map((category) => {
              return (
                <span>{category}</span>
              )
            })}
          </div>
        </Title>
      </Header>
      <Description>{volumeInfo?.description}</Description>
      <Close onClick={onClose}>x</Close>
    </Wrapper>
  </ModalContainer>
)

const Header = styled.div`
  gap: 20px;
  display: flex;
  align-items: flex-start;
`

const ModalContainer = styled.div`
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100vh;
  position: fixed;
  align-items: center;
  background: #0000007d;
  justify-content: center;
  display: ${({ show }) => show ? 'flex' : 'none'};
  `
const Title = styled.div`
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 10px;
  }
  .authors {
    gap: 10px;
    opacity: .7;
    display: flex;
    margin-bottom: 5px;

    span {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
  .date {
    opacity: .7;
    margin-bottom: 10px;
    font-size: 12px;
      text-transform: uppercase;
  }
  .categories {
    display: flex;
    gap: 10px;

    span {
      padding: 5px;
      color: white;
      font-size: 10px;
      border-radius: 10px;
      background: #ef4855;
    }
  }
  `

const Wrapper = styled.div`
  width: 90%;
  padding: 40px;
  max-width: 700px;
  max-height: 90vh;
  overflow: auto;
  border-radius: 10px;
  position: relative;
  background: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

const Close = styled.div`
  top: 15px;
  right: 15px;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
  background: #ef4855;
  border-radius: 50px;
  justify-content: center;
`

const Description = styled.p`
  opacity: .8;
  font-size: 14px;
  line-height: 1.5;
  margin-top: 20px;
`