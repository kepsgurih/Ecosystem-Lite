import {
    GoogleOutlined,
    GithubOutlined,
    TwitterOutlined
  } from '@ant-design/icons';

export default function ButtonLogin(props){
    const icons = () => {
        if(props.icon == 'google'){
            return <GoogleOutlined />
        }
        else if(props.icon =='github'){
            return <GithubOutlined />
        }
        else{
            return <TwitterOutlined />
        }
    }
    return <button className="my-0.5 rounded-lg bg-gray-600 hover:bg-gray-400 py-2 text-white">{icons()} Login with {props.text}</button>
}