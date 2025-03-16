import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = 'edge';

export async function GET(request, { params }) {
  try {
    const { productId } = await params;

    const product = await prisma.product.findUnique({
      where: {
        id: productId
      },
      include: {
        category: true
      }
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const { productId } = await params;
    const data = await request.json();

    const product = await prisma.product.update({
      where: {
        id: productId
      },
      data: {
        name: data.name,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        categoryId: data.categoryId
      },
      include: {
        category: true
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}