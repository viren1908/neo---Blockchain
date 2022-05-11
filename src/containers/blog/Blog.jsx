import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

export default function Blog() {
  return (
    <div className="neo__blog section__padding" id="blog">
      <div className="neo__blog-heading">
        <h1 className="gradient__text">
          Get started with Bitcoin,Read our blogs for more info
        </h1>
      </div>
      <div className="neo__blog-container">
        <div className="neo__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="May 10, 2022"
            text="What’s the Difference Between a Private Blockchain and a Public Blockchain?"
          />
        </div>
        <div className="neo__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="May 09, 2022"
            text="Pros and Cons of Blockchain"
          />
          <Article
            imgUrl={blog03}
            date="May 10, 2022"
            text="Pivoting from Web2 to Web3 by Preethi Kasireddy of DappCamp"
          />
          <Article
            imgUrl={blog04}
            date="May 11, 2022"
            text="Introducing WalletConnect: Access Web3 from your Blockchain.com Wallet"
          />
          <Article
            imgUrl={blog05}
            date="May 12, 2022"
            text="No, we’re serious: Blockchain.com"
          />
        </div>
      </div>
    </div>
  );
}
