export const runtime = 'edge';

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        smallDescription: data.smallDescription,
        price: parseFloat(data.price),
        currentPrice: data.currentPrice ? parseFloat(data.currentPrice) : null,
        images: data.images || [],
        poster: data.poster,
        slug: data.slug,
        purchaseLink: data.purchaseLink,
        demoLink: data.demoLink,
        demoVideo: data.demoVideo,
        demoGIF: data.demoGIF,
        categoryId: data.categoryId,
        stock: parseInt(data.stock) || 0,
        featured: data.featured || false,
        userId: data.userId,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const data = await request.json();
    const product = await prisma.product.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        description: data.description,
        smallDescription: data.smallDescription,
        price: parseFloat(data.price),
        currentPrice: data.currentPrice ? parseFloat(data.currentPrice) : null,
        images: data.images || [],
        poster: data.poster,
        slug: data.slug,
        purchaseLink: data.purchaseLink,
        demoLink: data.demoLink,
        demoVideo: data.demoVideo,
        demoGIF: data.demoGIF,
        categoryId: data.categoryId,
        stock: parseInt(data.stock) || 0,
        featured: data.featured || false,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    await prisma.product.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}