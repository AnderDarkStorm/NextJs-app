import Link from 'next/link';
import Router from 'next/router'

export default function Main(){

    var articles = [
        {   
            id: 0,
            title: "Blackwork Tattoo Style", 
            autor: "Arfox", 
            text: "Stylistically speaking, blackwork is a very broad categorical term. It applies almost any body art that's created using solely black ink, but as you can imagine, a lot can be done with this versatile and striking color. Looking through blackwork artists portfolios, you'll see all kinds of tattoo types from ancient sacred geometry to modern abstract ornamental designs to extremely detailed illustrative pieces. It is hands down the style where the most experimentation is currently occurring in the industry, and some of the work being produced today is absolutely mind-blowing.", 
            date: "20/07/20", 
            images: "/articles/black_work2.jpg"
        },
        {   
            id: 1,
            title: "Neo Traditional Tattoo Style", 
            autor: "Derfox", 
            text: "Neo traditional, as the name implies, is an evolution of the traditional style. It features the core properties of its predecessor, like pronounced linework and extremely vibrant colors but it also has an illustrative quality to it. This is because Neo traditional artists are highly influenced by Art Nouveau and Art Deco aesthetics. The main difference between traditional tattoos and neo traditional tattoos is that neo traditional tattoos often have a broader color palette and a broader range of motifs. Pieces done in this style are known for their lush, decorative details as well as the use of natural imagery such as florals and animals.", 
            date: "16/07/20", 
            images: "/articles/neotradi2.jpg"
        },
        {   
            id: 2,
            title: "New School Tattoo Style", 
            autor: "Rednar", 
            text: "Don't let the name fool you, new school isn't really all that new anymore. It rose to prominence in the weirdness that was the late '80s and early '90s, but lately it has waned in popularity. This is probably because it was very much a product of its time, featuring a highly animated aesthetic that takes after popular entertainment from that period in American history. The style is cartoonish and wacky, featuring caricatures and other exaggerated figures. If you're the sort of person who likes their body art injected with the spirit of Ren and Stimpy, then this comic style is for you.", 
            date: "04/04/20", 
            images: "/articles/new_school1.jpg"
        },
        {   
            id: 3,
            title: "Realism Tattoo Style", 
            autor: "Ander", 
            text: "Though classic realism has been a part of the fine art since as far back as the Renaissance, it only found its way to the world of tattoos recently, cropping up around the latter half of the 20th century. Since then, this new tattoo style has become increasingly refined and extremely popular. As it now stands, you can find jaw-dropping color and black and grey portraits of pretty much any celebrity you can think of as well as realistic depictions of nature and just about anything else imaginable, even the surreal.", 
            date: "18/01/20", 
            images: "/articles/realism2.jpg"
        },

    ];


    return(

        <div className="main">

        { articles.map(article => (
        
                <div className="article" key={article.id} onClick={e => Router.push('/articles/[id]',  `/articles/${article.id}`)}  >
                    <div>
                        <h2>{article.title}</h2>
                        <h3>By {article.autor}</h3>
                        <h4>{article.date}</h4>
                    </div>
                    <div className="container-image">
                        <img width="" src={article.images} alt="" />
                    </div>
                </div> 
     
        ))   
                
        }
         
        </div>
    )
}