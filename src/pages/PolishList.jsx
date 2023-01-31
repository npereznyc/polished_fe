import { useState, useEffect } from "react";
import axios from "axios";

function PolishList() {
	const [polishList, setPolishList] = useState([])

	useEffect(() => {
		axios
			.get("/api/polishes/")
			.then((res) => {
				console.log(res.data)
				setPolishList(res.data)
			})
			.catch((err) => console.log(err))
	}, [])



	return (
		<div>
			<div>
				{polishList.map((e, index) => {
					return (
						<div key={index}>
							<p> {e.name}</p>
							<p> {e.brand}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default PolishList;