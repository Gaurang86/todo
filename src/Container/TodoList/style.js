import styled from 'styled-components'

const DsaStyle = styled.div`
  ${'' /* font-family: Arial, sans-serif; */}
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  .map-container {
    width: 800px;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-size: 3em;
    margin-bottom: 20px;
    font-weight: 500;
  }

  form {
    margin-bottom: 25px;
  }

  .minpt {
    padding: 10px;
    margin-right: 10px;
    width: 70%;
  }

  .ibtn {
    padding: 10px;
    background-color: #0080ff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    width: 10em;
    margin-top: 3em;
  }
  .btn {
    padding: 10px;
    background-color: #0080ff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  li div {
    display: flex;
    align-items: center;
  }

  p {
    width: 35em;
    text-align: start;
    height: 2em;
    line-height: 2em;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: white;
  }
  .selector {
    border: none;
    background: none;
    color: skyblue;
    option:not(:checked) {
      background-color: #fff;
    }
  }
  .task-bar {
    display: flex;
    justify-content: space-evenly;
    font-weight: 500;
    color: slategrey;
    font-size: 1.1em;
  }
  @media screen and (max-width: 600px) {
    .map-container {
      border-radius: 0;
      display: inline;
      width: 90%;
      border-radius: 5px;
      overflow: hidden;
    }
    .allbtn {
      float: right;
    }
    .minpt {
      width: 100%;
      font-size: 14px;
    }
    .ibtn {
      width: 90%;
      font-size: 14px;
      margin-top: 1em;
      height: 3.4em;
    }
    p {
      width: 17em;
      word-wrap: break-all;
    }
  }
`

export { DsaStyle }
