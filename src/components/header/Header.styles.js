import styled from 'styled-components'

export const ControlHeader = styled.div`
  align-items: center;
  display: flex;

  .icon {
    &__flag-active {
      align-items: center;
      display: flex;
  
      img {
        width: auto;
        height: 50px;
      }
    }
  }
`

export const IconMenu = styled.button`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  outline: none;

  border-radius: 999px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,.19),0 1px 1px 0 rgba(56,56,56,.137);
  margin-right: 20px;

  .icon-menu {
    position: relative;
    width: 70%;
    height: 2px;
    min-height: 2px;
    color: inherit;
    background-color: #2f323e;
    display: block;
    transition: all 0.3s ease;

    &:before, 
    &:after {
      position: relative;
      display: block;
      color: inherit;
      background-color: inherit;
      left: 0;
      height: 2px;
      min-height: 2px;
      content: '';
      transition: all 0.3s ease;
    }

    &:before {
      width: 120%;
      bottom: -6px;
    }

    &:after {
      width: 130%;
      top: -6px;
    }
  }


  &:hover {
    .icon-menu {
      width: 100%;

      &:before,
      &:after {
        width: 100%;
      }
    }
  }
`

export const BoxHeader = styled.header`
  padding: 0 24px;
  min-height: 64px;
  transition: all .5s cubic-bezier(0,0,.2,1) !important;
  display: flex;
  align-items: center;

  display: flex;
  justify-content: space-between;

  background-color: #2f323e;
  color: #ffffff;
`
