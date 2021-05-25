const friendlyDate = dateObj => {
	const month = (dateObj.getMonth() + 1).toString()
	const date = (dateObj.getDate()).toString()
	return month + '月' + date + '日'
}

export {friendlyDate}