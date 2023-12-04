import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";
import { GET_ALL_PRODUCT, GET_PRODUCT_DETAIL } from "../../utils/constant";

export const getAllProduct = createAsyncThunk(
  GET_ALL_PRODUCT,
  async () => {
    try {
      const response = await httpService.get("/product");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getProductDetail = createAsyncThunk(
    GET_PRODUCT_DETAIL,
    async (productId) => {
      try {
        const response = await httpService.get(`/product/${productId}`);
        return response.data;
      } catch (error) {
        return error;
      }
    }
  );
  