import { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		axios
			.get("/api/reviews/")
			.then((res) => {
				console.log(res.data)
				setReviews(res.data)
			})
			.catch((err) => console.log(err))
	}, [])



	return (
		<div>
			<div>
				{reviews.map((e, index) => {
					return (
						<div key={index}>
							<p> {e.polish}</p>
							<p> {e.brand}</p>
                            <img src={e.image} />
                            <p> {e.review} </p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Reviews;