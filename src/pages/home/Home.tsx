import Infomation from '../../components/infomation/Infomation';
import Slide from '../../components/slide/Slide';
import './home.scss';

export default function Home() {
  return (
    <div className="home common">
      <div className="common__sticky">
        <Slide/>
      </div>
      <div className="common__content">
        <Infomation/>
      </div>
    </div>
  )
}
