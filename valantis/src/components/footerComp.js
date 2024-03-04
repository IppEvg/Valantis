import Button from '@mui/material/Button'
import  './footerComp-style.css'
import TGIcon from '../assets/telegr.svg'
export function FooterComp() {
    return (
      <>
        <footer   className=" footer">
        <div className="copyright">
          &copy; 2024 Ippolitov 
        </div>
        <div className="links">
          <p> Phone: 8(903)2452420</p>
          <div className="messanger">
          <div>
          <Button variant="outline"  >
              <img  className="imgMessamger" src={TGIcon} alt="Telegram"/>
                t.me/Evgeniy Ippolitov
            </Button>
          </div>
          </div>
        </div>
      </footer>
      </>
    );
  }