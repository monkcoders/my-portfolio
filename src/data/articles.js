import React from "react";

function article_1() {
	return {
		date: "29 April 2022",
		title: "Blockchain and its Applications",
		description:
			"Blockchain: It is a decentralized, trustless, distributed, immutable digital ledger (that stores transactions or data). Here, the transactions or data are stored in the form of blocks that are linked to the previous block — hence the name blockchain.",
		keywords: [
			"Applications of blockchain",
			"Abhishek",
			"Abhishek Sharma",
			"Abhi",
			"Blockchain",
			"Application",
			"blockchain in simple words"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					{/* <div className="paragraph">https://medium.com/coinmonks/blockchain-and-its-applications-85bb2b98fc47</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
					 */}
					<a href="https://medium.com/coinmonks/blockchain-and-its-applications-85bb2b98fc47">Click here to read this article</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "8 May 2022",
		title: "Multistage Graph Problem",
		description:
			"A multistage graph is a directed and weighted graph, in which all vertices are divided into stages, such that all the edges are only directed from the vertex of the current stage to the vertex of the next stage (i.e there is no edge between the vertex of the same stage and to the previous stage vertex). Both the first and last stage contains only one vertex called source and destination/sink respectively.",
		style: ``,
		keywords: [
			"multistage",
			"graph",
			"multistage graph",
			"abhishek sharma",
		],
		body: (
			<React.Fragment>
				<a href="https://medium.com/@abhisheksharma46/multistage-graph-problem-991d951363ef">Click here to read this article</a>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
