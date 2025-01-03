```text
TypeScript is just JavaScript with some additional features: static typing, interfaces, classes, generics, compile-time checking, decorators, etc.
TypeScript code is transformed into JavaScript code via the TypeScript compiler or Babel.
TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.
TypeScript is a statically typed language, which means that you can catch errors and bugs before the code runs.
TypeScript is a strongly typed language, which means that you can define the type of a variable when you declare it.
TypeScript is a compiled language, which means that you need to compile the TypeScript code into JavaScript code before you can run it.
```

### **TypeScript thêm gì vào JavaScript?**

1. **Hỗ trợ kiểu tĩnh (Static Typing):**
    - TypeScript cho phép bạn khai báo kiểu dữ liệu cho các biến, hàm, và đối tượng.
    - Điều này giúp phát hiện lỗi sớm trong quá trình phát triển, trước khi chạy mã.
    - **Ví dụ:**
      ```typescript
      let name: string = "John";
      name = 42; // Lỗi: Type 'number' is not assignable to type 'string'.
      ```

    - Trong JavaScript, không có lỗi kiểu như vậy cho đến khi mã chạy:
      ```javascript
      let name = "John";
      name = 42; // Không có lỗi, nhưng có thể dẫn đến hành vi không mong muốn.
      ```

2. **Kiểm tra lỗi khi biên dịch (Compile-time Error Checking):**
    - TypeScript kiểm tra mã nguồn khi biên dịch, giúp bạn sửa lỗi trước khi triển khai.
    - **Ví dụ:**
      ```typescript
      function greet(name: string): string {
        return "Hello, " + name;
      }
 
      greet(123); // Lỗi: Argument of type 'number' is not assignable to parameter of type 'string'.
      ```

3. **Hỗ trợ các tính năng nâng cao:**
    - **Interfaces và Generics:** Giúp định nghĩa rõ ràng các cấu trúc dữ liệu phức tạp.
    - **Tuỳ chọn các tính năng JavaScript mới:** TypeScript hỗ trợ các tính năng của JavaScript hiện đại (ES6+), ngay cả khi chúng chưa được trình duyệt hỗ trợ.
    - **Decorators:** (Một tính năng phổ biến trong các framework như NestJS).

4. **Công cụ hỗ trợ phát triển:**
    - TypeScript cải thiện trải nghiệm lập trình bằng cách:
        - **Autocomplete:** Gợi ý mã tự động thông minh hơn.
        - **Type Inference:** TypeScript có thể suy luận kiểu mà không cần khai báo rõ ràng.
        - **Refactoring:** Dễ dàng sửa mã với các công cụ IDE như Visual Studio Code.

5. **Bảo toàn tính năng của JavaScript:**
    - Mọi mã JavaScript hợp lệ đều là mã TypeScript hợp lệ.
    - TypeScript chỉ bổ sung tính năng mà không làm mất đi tính linh hoạt vốn có của JavaScript.

---

### **Quá trình hoạt động của TypeScript:**

1. **Viết mã TypeScript (.ts):**
    - Bạn viết mã nguồn với cú pháp TypeScript, bao gồm cả kiểu dữ liệu, interfaces, decorators, v.v.

2. **Biên dịch thành JavaScript (.js):**
    - Công cụ `tsc` (TypeScript Compiler) sẽ chuyển đổi mã TypeScript thành JavaScript thuần túy.
    - Kết quả là mã JavaScript có thể chạy trên mọi trình duyệt hoặc môi trường Node.js.

3. **Thực thi mã JavaScript:**
    - Sau khi biên dịch, mã JavaScript được chạy giống như bất kỳ mã JavaScript nào khác.

---

### **Tóm lại:**
TypeScript thực sự là một **lớp mở rộng trên JavaScript**. Nó không thay đổi cách JavaScript hoạt động mà chỉ thêm:
- **Tính năng kiểm tra kiểu tĩnh.**
- **Các công cụ phát triển mạnh mẽ.**
- **Tính bảo trì cao hơn** cho các dự án lớn.

Vì thế, TypeScript rất hữu ích trong các dự án lớn, nơi việc phát hiện lỗi sớm và đảm bảo tính nhất quán của mã là ưu tiên hàng đầu.