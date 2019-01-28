import * as React from 'react';

interface Props{
    name: string;
    job: string
}

const Profile: React.SFC<Props> = ({name, job})=>{
    return(
        <div>
            <h1>dsds</h1>
            <br/>
            {job} <br/>
            {name}
        </div>
    )
};
export default Profile;

/*sfc 사용하지 않을시, 컴포넌트가 jsx가 아닌 문자열을 리턴하면 여기서 에러가 나는 게 아니고 이 부모 컴포넌트에서 에러가 발생*/


