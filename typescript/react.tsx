// interface AppProps {
//     description?: string
//     style?: React.CSSProperties
// }

// interface AppStates {
//     title?: string,
//     show: boolean
// }

// class App extends React.Component<AppProps, AppStates> {
//     constructor (props: AppProps) {
//         super (props)
//         this.state = {
//             title: 'react',
//             show: true
//         }
//     }

//     handleClick() {
//         this.setState({
//             show: !this.state.show
//         })
//     }

//     render() {
//         const { show, title } = this.state
//         const { description, style } = this.props
        
//         return (
//             <div>
//                 <p style={{ display: show ? 'block' : 'none', ...style }}>{title}</p>
//                 <p>{description}</p>
//                 <button onClick={ () => this.handleClick() }>按钮</button>
//             </div>
//         )
//     }
// }