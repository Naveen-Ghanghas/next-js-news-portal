"use client";
import React from "react";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ Unwrap params properly
   console.log("Category slug:", slug); // Debugging line to check the slug value
  return (
   <section className="category">
		  <div className="container">
		    <div className="row">
		      <div className="col-md-8 text-left">
		        <div className="row">
		          <div className="col-md-12">        
		            <ol className="breadcrumb">
		              <li><a href="#">Home</a></li>
		              <li className="active">{slug}</li>
		            </ol>
		            <h1 className="page-title">Category: {slug}</h1>
		            <p className="page-subtitle">Showing all posts with category <i>{slug}</i></p>
		          </div>
		        </div>
		        <div className="line"></div>
		        <div className="row">
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img01.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>237</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img11.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>78</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img08.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>10</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img13.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>1820</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img15.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>739</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img03.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>902</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img15.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>78</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <article className="col-md-12 article-list">
		            <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img16.jpg"/>
		                </a>
		              </figure>
		              <div className="details">
		                <div className="detail">
		                  <div className="category">
		                   <a href="category.html">Film</a>
		                  </div>
		                  <div className="time">December 26, 2016</div>
		                </div>
		                <h1><a href="single.html">Lorem Ipsum Dolor Sit Consectetur Adipisicing Elit</a></h1>
		                <p>
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		                  quis nostrud exercitat...
		                </p>
		                <footer>
		                  <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>198</div></a>
		                  <a className="btn btn-primary more" href="single.html">
		                    <div>More</div>
		                    <div><i className="ion-ios-arrow-thin-right"></i></div>
		                  </a>
		                </footer>
		              </div>
		            </div>
		          </article>
		          <div className="col-md-12 text-center">
		            <ul className="pagination">
		              <li className="prev"><a href="#"><i className="ion-ios-arrow-left"></i></a></li>
		              <li className="active"><a href="#">1</a></li>
		              <li><a href="#">2</a></li>
		              <li><a href="#">3</a></li>
		              <li><a href="#">...</a></li>
		              <li><a href="#">97</a></li>
		              <li className="next"><a href="#"><i className="ion-ios-arrow-right"></i></a></li>
		            </ul>
		            <div className="pagination-help-text">
		            	Showing 8 results of 776 &mdash; Page 1
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-md-4 sidebar">
		        <aside>
		          <div className="aside-body">
		            <figure className="ads">
			            <a href="single.html">
			              <img src="/assets/images/ad.png"/>
			            </a>
		              <figcaption>Advertisement</figcaption>
		            </figure>
		          </div>
		        </aside>
		        <aside>
		          <h1 className="aside-title">Recent Post</h1>
		          <div className="aside-body">
		            <article className="article-fw">
		              <div className="inner">
		                <figure>
			                <a href="single.html">
			                  <img src="/assets/images/news/img12.jpg"/>
			                </a>
		                </figure>
		                <div className="details">
		                  <h1><a href="single.html">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit</a></h1>
		                  <p>
		                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                    tempor incididunt ut labore et dolore magna aliqua.
		                  </p>
		                  <div className="detail">
		                    <div className="time">December 26, 2016</div>
		                    <div className="category"><a href="category.html">Lifestyle</a></div>
		                  </div>
		                </div>
		              </div>
		            </article>
		            <div className="line"></div>
		            <article className="article-mini">
		              <div className="inner">
		              <figure>
			              <a href="single.html">
			                <img src="/assets/images/news/img05.jpg"/>
		                </a>
		              </figure>
		              <div className="padding">
		                <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
		                <div className="detail">
		                  <div className="category"><a href="category.html">Lifestyle</a></div>
		                  <div className="time">December 22, 2016</div>
		                </div>
		              </div>
		              </div>
		            </article>
		            <article className="article-mini">
		              <div className="inner">
		                <figure>
			                <a href="single.html">
			                  <img src="/assets/images/news/img02.jpg"/>
		                  </a>
		                </figure>
		                <div className="padding">
		                  <h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
		                  <div className="detail">
		                    <div className="category"><a href="category.html">Travel</a></div>
		                    <div className="time">December 21, 2016</div>
		                  </div>
		                </div>
		              </div>
		            </article>
		            <article className="article-mini">
		              <div className="inner">
		                <figure>
			                <a href="single.html">
			                  <img src="/assets/images/news/img13.jpg"/>
		                  </a>
		                </figure>
		                <div className="padding">
		                  <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
		                  <div className="detail">
		                    <div className="category"><a href="category.html">International</a></div>
		                    <div className="time">December 20, 2016</div>
		                  </div>
		                </div>
		              </div>
		            </article>
		          </div>
		        </aside>
		        <aside>
		          <div className="aside-body">
		            <form className="newsletter">
		              <div className="icon">
		                <i className="ion-ios-email-outline"></i>
		                <h1>Newsletter</h1>
		              </div>
		              <div className="input-group">
		                <input type="email" className="form-control email" placeholder="Your mail"/>
		                <div className="input-group-btn">
		                  <button className="btn btn-primary"><i className="ion-paper-airplane"></i></button>
		                </div>
		              </div>
		              <p>By subscribing you will receive new articles in your email.</p>
		            </form>
		          </div>
		        </aside>
		      </div>
		    </div>
		  </div>
		</section>
  );
}
