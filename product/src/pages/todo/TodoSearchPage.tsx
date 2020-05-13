import React from 'react';
import { TodoSummaryList } from '../../components';


interface Props {

}
interface State {

}

export class TodoSearchPage extends React.Component<Props, State> {
    public state = {};

    public render() {
        return (<TodoSummaryList />);
    }
}


// todo
// 스크롤 처리
// https://velog.io/@killi8n/Dnote-6-1.-React-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4%EB%A7%81-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84.-79jmep7xes