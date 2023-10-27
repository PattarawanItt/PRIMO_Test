# PRIMO_Test
##initialize TypeScript
npm install
เพื่อ set up environment ต่างๆ

##test
npm test

##ขั้นตอนการทำ
สร้างโฟลเดอร์ test ขึ้นมาแล้วทำงานติดตั้ง
1. npm init -y
2. npm install --save-dev typescript
3. tsc --init
4. เช็คไฟล์ tsconfig.js แล้ว set ค่าตรงนี้
5. ที่  \{ "compilerOptions" ใส่ค่า "target": "es6", "module": "commonjs","strict": true \} และ "include": ["src/**/*.ts"], "exclude": ["node_modules"]
6. สร้างโฟลเดอร์ src แล้วสร้างไฟล์ nerge.ts และ server.test.ts ขึ้นมา
7. npm install --save-dev jest ts-jest @types/jest
8. ใช้คำสั่งนี้ใน terminal เพื่อติดตั้ง jest อาไว้ใช้ test
9. ใน package.json set ค่าแบบนี้  "scripts": \{ "test": "jest" \}
10. ทำการ run test ด้วยคำสั่ง npm test
11. เมื่อ test ผ่านแล้ว push code ขึ้น git
