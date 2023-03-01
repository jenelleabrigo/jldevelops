import github from "../assets/common/techstack/github.png";
import atom from "../assets/common/techstack/atom.png";
import vscode from "../assets/common/techstack/vscode.png";
import html5 from "../assets/common/techstack/html5.png";
import css3 from "../assets/common/techstack/css3.png";
import sass from "../assets/common/techstack/sass.png";
import js from "../assets/common/techstack/js.png";
import jquery from "../assets/common/techstack/jquery.png";
import react from "../assets/common/techstack/react.png";
import firebase from "../assets/common/techstack/firebase.png";
import redux from "../assets/common/techstack/redux.png";
import wordpress from "../assets/common/techstack/wordpress.png";
import php from "../assets/common/techstack/php.png";
import tailwind from "../assets/common/techstack/tailwind.png";
import next from "../assets/common/techstack/next.png";
import ethereum from "../assets/common/techstack/ethereum.png";
import solidity from "../assets/common/techstack/solidity.png";
import syncfusion from "../assets/common/techstack/syncfusion.png";

// NETFLIX_CLONE
import netflix from "../assets/works/netflix/netflix.png";
import netflix_landing from "../assets/works/netflix/netflix_landing.png";
import netflix_sign_up from "../assets/works/netflix/netflix_sign-up.jpg";
import netflix_sign_in from "../assets/works/netflix/netflix_sign-in.jpg";
import netflix_home from "../assets/works/netflix/netflix_home.png";
import netflix_feature from "../assets/works/netflix/netflix_feature.jpg";
import netflix_trailer from "../assets/works/netflix/netflix_trailer.jpg";

// BLOG
import jlblog from "../assets/works/blog/jl-blog.png";
import blog_home from "../assets/works/blog/home.png";
import blog_post from "../assets/works/blog/post.png";

// KRYPT
import krypt from "../assets/works/krypt/krypt.jpg";
import krypt_login from "../assets/works/krypt/login.png";
import krypt_logout from "../assets/works/krypt/logout.png";
import krypt_wallet from "../assets/works/krypt/wallet.jpg";
import krypt_form from "../assets/works/krypt/transaction_form.jpg";
import krypt_record from "../assets/works/krypt/transaction_record.jpg";

// SHOPPY
import shoppy from "../assets/works/shoppy/logo.svg";
import shoppy_menu from "../assets/works/shoppy/menu.png";
import shoppy_profile from "../assets/works/shoppy/profile.png";
import shoppy_ecommerce from "../assets/works/shoppy/ecommerce.png";
import shoppy_ecommerce_pink from "../assets/works/shoppy/ecommerce_pink.png";
import shoppy_messages from "../assets/works/shoppy/messages.png";
import shoppy_cart from "../assets/works/shoppy/cart.png";

// eSHOPPY
import eshoppy from "../assets/works/eshoppy/logo.png";
import eshoppy_favicon from "../assets/works/eshoppy/favicon.png";
import eshoppy_product_list from "../assets/works/eshoppy/product_list.png";
import eshoppy_product_detail from "../assets/works/eshoppy/product_detail.png";
import eshoppy_cart from "../assets/works/eshoppy/cart.jpg";
import eshoppy_category from "../assets/works/eshoppy/category.jpg";
import eshoppy_checkout from "../assets/works/eshoppy/checkout.png";
import eshoppy_success from "../assets/works/eshoppy/success.png";

export const projects = [
  {
    title: "Netflix Clone",
    mainImg: netflix,
    content:
      "Cloning the Netflix landing page and home page separately but merged to become more powerful project created with React js and scss. Main features of this project are the ability to register an account and use to sign in to access the home page, a hero in home page where random feature movie is displayed that changes every load and able to play trailer, and movie lists with different categories integrated with Axios from TMDB api. The backend used for the account registration was integrated with the Firebase email and password authentication feature.",
    techstack: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "sass",
        icon: sass,
      },
      {
        name: "firebase",
        icon: firebase,
      },
    ],
    slides: [netflix_landing, netflix_sign_up, netflix_sign_in, netflix_home, netflix_feature, netflix_trailer],
    link: "https://netflix-clone-463b1.web.app/",
  },
  {
    title: "Jen's Blog",
    mainImg: jlblog,
    content:
      "The first simple project made with Nextjs framework. Although this only uses markdown files creating a blog, this project focused more on its moving background on scroll or parallax which was achieved through a library called react-scroll-parallax. Styling for this project also made it easy with tailwind.",
    techstack: [
      {
        name: "nextjs",
        icon: next,
      },
      {
        name: "tailwind css",
        icon: tailwind,
      },
    ],
    slides: [jlblog, blog_home, blog_post],
    link: "https://jldevelops-blog.vercel.app/",
  },
  {
    title: "Krypt Web3.0",
    mainImg: krypt,
    content:
      "A full functional web3.0 project integrating the client and smart contract with ethereum. This project was created together with JSMastery tutorial. Client uses react, tailwind and ethereum while the smart contract was made with solidity and tested with hardhat. Ethereum allows connecting wallet to Metamask and creating transactions that are reflected with random GIF related to the keyword that was typed in in the form. The smart contract allows a logged in user to send ethereum (using Goerli token) to another wallet address which is recorded as one transaction. Styling this project was made easy with tailwind css.",
    techstack: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "tailwind",
        icon: tailwind,
      },
      {
        name: "solidity",
        icon: solidity,
      },
      {
        name: "ethereum",
        icon: ethereum,
      },
    ],
    slides: [krypt_logout, krypt_login, krypt_wallet, krypt_form, krypt_record],
    link: "https://jl-krypt.vercel.app/",
  },
  {
    title: "Shoppy",
    mainImg: shoppy,
    content:
      "A dashboard sample using Syncfusion library which offers a very responsive and lightweight components for modern web applications such as charts, kanban, calendar, editor, and color-picker. This project was made together with a tutorial from JSMastery. This also uses react context for easy access to state and methods in different pages of the project. One wonderful feature of this dashboard is the ability to reflect chosen mode and theme color by the user and retain this by the use of local storage.",
    techstack: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "tailwind",
        icon: tailwind,
      },
      {
        name: "syncfusion",
        icon: syncfusion,
      },
    ],
    slides: [shoppy_ecommerce, shoppy_ecommerce_pink, shoppy_menu, shoppy_profile, shoppy_messages, shoppy_cart],
    link: "https://jl-dashboard-syncfusion.netlify.app/",
  },
  {
    title: "eShoppy",
    mainImg: eshoppy_favicon,
    content:
      "An e-commerce website that displays product list with different categories from api called fakestoreapi. This project used react as main , tailwind for styling, and redux for state management. Functions include ability to add an item to the cart and modify its quantity, see details of the item in separate page, summarize the added items in the cart, ability to checkout displaying the total amount of all added items, and displays success page upon checkout confirmation.",
    techstack: [
      {
        name: "react",
        icon: react,
      },
      {
        name: "tailwind",
        icon: tailwind,
      },
      {
        name: "redux",
        icon: redux,
      },
    ],
    slides: [eshoppy, eshoppy_product_list, eshoppy_product_detail, eshoppy_cart, eshoppy_category, eshoppy_checkout, eshoppy_success],
    link: "https://jl-eshoppy.onrender.com/",
  },
];
