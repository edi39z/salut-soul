#!/bin/bash

echo "🔄 Fixing Prisma Migration Issues"
echo "================================="

echo "1. Reset migration state..."
npx prisma migrate reset --force

echo ""
echo "2. Generate new migration..."
npx prisma migrate dev --name init_complete_schema

echo ""
echo "3. Generate Prisma client..."
npx prisma generate

echo ""
echo "4. Seed database..."
npx prisma db seed

echo ""
echo "✅ Migration fix completed!"
