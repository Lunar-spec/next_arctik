"use server"

import { CheckoutOrderParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import Order from "../database/models/order.model"

export const checkoutOrder = async (order: CheckoutOrderParams) => {
    try {
        await connectToDatabase();
        const newOrder = await Order.create(order)

    } catch (error) {
        handleError(error)
        
    }
}