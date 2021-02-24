import styled from 'styled-components'

export const Label = styled.div`
  font-size: 14px;
`

export const StyleForm = styled.form`
  max-width: 520px;
  width: 100%;
  background-color: #FFFDFF;
  box-shadow: 0px 0px 23px -5px rgba(207,226,227,1); 
  padding: 20px 60px;
  border-radius: 20px;

  .login {
    &__title {
      text-align: center;
      font-size: 25px;
      padding: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    &__logo {
      display: flex;
      justify-content: center;
      padding: 20px;
    }

    &__form-detail {
      .field {
        margin-bottom: 20px;

        ${Label} {
          margin-bottom: 5px;
        }
        
        .field-input {
          border-radius: 5px;
          height: 50px;
          background-color: #F2F0F6;

          > * {
            background-color: transparent;
          }
        }

        &.btn-login {
          margin-top: 60px;
          
          button {
            height: 40px;
          }
        }
      }
    }
  }
`

export const BoxForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 80px 20px;
`
