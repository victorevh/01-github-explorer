import '../styles/profile.scss'
import imgProfile from '../assets/profile.webp'

export function ProfileItem () {
    return (
        <div className="profile">
            <div className="divProfile">
                <img
                    className="imgProfile"
                    src={imgProfile}
                    alt="Homem pardo sorrindo"
                />
                <h3>Victor Oliveira</h3>
            </div>
            <div className="About">  
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae eos inventore ducimus iste nam officiis earum cupiditate iure,Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae eos inventore ducimus iste nam officiis earum cupiditate iure, expedita eaque deleniti, voluptatem cumque quibusdam nemo maxime, id incidunt quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dicta? Nesciunt, voluptas sapiente perferendis eos, quos quisquam esse delectus minus voluptates, sint omnis quae. Aspernatur fuga totam at asperiores necessitatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi sapiente voluptate beatae fugit id nisi impedit ex accusamus ab aperiam aliquid, numquam dolores est consectetur, tempore perspiciatis cupiditate consequatur!</p>
            </div>
        </div>
    );
}