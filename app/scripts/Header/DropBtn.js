// import React, { Component } from 'react'
//
// import '../../styles/Navbar/drop-btn.sass'
//
// export default class DropBtn extends Component {
//   constructor () {
//     super()
//     this.state = {
//       transform: false
//     }
//     this.onTransformBar = this.onTransformBar.bind(this)
//   }
//
//   onTransformBar () {
//     if (this.state.transform === false) {
//       this.setState({
//         transform: true
//       })
//     } else {
//       this.setState({
//         transform: false
//       })
//     }
//   }
//
//   render () {
//     return (
//       <div className='drop-btn'
//         onClick={this.onTransformBar}
//       >
//         <div className={'bar1 ' + (this.state.transform ? 'transform-bar1' : '')}
//         />
//         <div className={'bar2 ' + (this.state.transform ? 'transform-bar2' : '')}
//         />
//         <div className={'bar3 ' + (this.state.transform ? 'transform-bar3' : '')}
//         />
//       </div>
//     )
//   }
// }
