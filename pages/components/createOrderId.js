let orderId = 0

const createOrderId = () => {
	orderId += 1
	return orderId
}

export {createOrderId}