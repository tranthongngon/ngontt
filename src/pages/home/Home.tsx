import Infomation from '../../components/infomation/Infomation';
import ListProject from '../../components/listProject/ListProject';
import Slide from '../../components/slide/Slide';
import Socials from '../../components/socials/Socials';
import Footer from '../../layout/footer/Footer';
import './home.scss';

export default function Home() {
  return (
    <div className="home common">
      <div className="common__sticky">
        <Slide/>
      </div>
      <div className="common__content">
        <Infomation/>
        <ListProject/>
        <Socials columns={2} width='100%' />
        <Footer/>
      </div>
    </div>
  )
}
