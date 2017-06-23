class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hocVien: 10
        };
        this.themHocVien = this.themHocVien.bind(this);
    }
    themHocVien(){
        this.setState({hocVien: this.state.hocVien + 1});
    }
    render(){
        return(
            <div>
                <p>{this.props.txt}</p>
                <p>So hoc vien: {this.state.hocVien}</p>
                <button>Xoa</button>
                <button onClick={this.themHocVien.bind(this)}>Them hoc vien</button>
            </div>            
        );
    }
}

Note.defaultProps = {
    txt: 'ChungNguyen'
}

ReactDOM.render(
    <div>
        <Note/>
        <Note txt="Nodejs">CHUNG</Note>        
    </div>
    ,
    document.getElementById('root')
);