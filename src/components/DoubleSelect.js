import React, { useState, useEffect } from "react";
import items from "../data/data";
import "./DoubleSelect.css"

function DoubleSelect() {
	const [categoriesArr, setCategoriesArr] = useState([]);
	const [itemsArr, setItemsArr] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("fruit");
	const [selectedItem, setSelectedItem] = useState("apple");

	const data = items.reduce((acc, curr) => {
		const category = curr.category;
		if (acc[category] == null) {
			acc[category] = [];
		}
		acc[category].push(curr.name);
		return acc;
	}, []);

	useEffect(() => {
		setCategoriesArr(Object.keys(data));
		setItemsArr(data["fruit"]);
	}, []);

	const handleCategoryChange = (e) => {
		setSelectedCategory(e.target.value);
		setItemsArr(data[e.target.value]);
		setSelectedItem(data[e.target.value][0]);
	};

	const handleItemChange = (e) => {
		setSelectedItem(e.target.value);
	};

	return (
		<div className="double-select">
			<h1>{selectedItem}</h1>
            <div className="select-container">
			<select
				className="select-box"
				value={selectedCategory}
				onChange={(e) => handleCategoryChange(e)}
			>
				{categoriesArr.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
			<select
				className="select-box"
				value={selectedItem}
				onChange={(e) => handleItemChange(e)}
			>
				{itemsArr.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
            </div>
		</div>
	);
}

export default DoubleSelect;
