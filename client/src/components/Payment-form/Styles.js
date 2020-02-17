import styled, { css } from 'styled-components';

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 3px;
  padding: 5px 25px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`;

const btnPrimary = btn('#71b430', '#588c25');
const btnDanger = btn('#e27c79', '#c9302c');

export default styled.div`
  h1 {
    text-align: center;
    color: #222;
  }

  h2 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    & > a {
      display: inline;
    }
  }

  .loading {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin: 50px;
  }

  form,
  div.form {
    @media (min-width: 320px) {
        margin: 5px auto;
        text-align: left;
        max-width: 500px;
        position: relative;
        padding: 5px 0;
    }
    @media (min-width: 768px) {
        margin: 30px auto 40px;
        padding: 25px;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    & > div {
      @media (min-width: 320px) {
        display: flex;
        flex-flow: row nowrap;
        line-height: 2em;
        position: relative;
        padding: 5px 5px;
        border: 1px solid transparent;
        &.active {
            background-color: paleturquoise;
            border-color: turquoise;
        }
      }
      @media (min-width: 768px) {
        padding: 8px 5px;
      } 
      & > label {
        color: #333;
        width: 110px;
        min-width: 60px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > .downshift > input {
        @media (min-width: 320px) {
            flex: 1;
            padding: 10px 15px;
            margin-left: 5px;
            font-size: 1em;
            border: 1px solid #ccc;
            border-radius: 3px;
                &[disabled] {
            background: #eee;
            }
        }
        @media (min-width: 768px) {
            margin-left: 15px;
        }
      }
      & > div {
        margin-left: 16px;
        & > label {
          margin-left: 0;
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
        &.downshift {
          margin-left: 0;
          padding-left: 15px;
          flex: 1;
          & > input {
            width: 100%;
            padding: 6px 5px;
            font-size: 1em;
            margin-left: 0;
            border: 1px solid #ccc;
            border-radius: 3px;
          }
        }
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
      & > button.remove {
        ${btnDanger};
      }
    }
    & > .buttons {
      @media (min-width: 320px) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin-top: 0;
      }  
      @media (min-width: 768px) {
        margin-top: 15px;
      }  
    }

    .error {
      display: flex;
      font-weight: bold;
      color: #800;
      flex-flow: row nowrap;
      justify-content: center;
    }
    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
    .submitting {
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      padding: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      z-index: 10;
      font-weight: bold;
      font-size: 0.8em;
    }
    .saving {
      font-size: 0.8em;
      font-weight: bold;
      color: darkblue;
      margin: 8px 0 0 7px;
    }
  }
  button {
    margin: 0 10px;
    &[type='submit'] {
      ${btnPrimary};
    }
    &[type='button'] {
      ${btnDefault};
    }
  }
  .input-wrapper {
    @media (min-width: 320px) {
        display: flex;
        flex-direction: column;
        & > input:first-child {
            margin-bottom: 12px;
        }
    }
    @media (min-width: 768px) {
        display: block;
        & > input:first-child {
            margin-bottom: 0;
            margin-right: 2px;
        }
    }
  }
`;
