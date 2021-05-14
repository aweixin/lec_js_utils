### addClass

#### 给元素添加 className

```typescript
function addClass(ele: HTMLElement, className: string): void;
```

```javascript
addClass(document.getElementById("app"), "className");
```

### hasClass

#### 元素如果有 className,则返回 true,否则返回 false

```typescript
function hasClass(ele: HTMLElement, className: string): boolean;
```

```javascript
hasClass(document.getElementById("app"), "className"); // true
```

### removeClass

#### 给元素移除 className

```typescript
function removeClass(ele: HTMLElement, className: string): boolean;
```

```javascript
removeClass(document.getElementById("app"), "className"); // true
```

### offset

#### 获取元素参数的 offsetTop 与 offsetLeft

```typescript
function offset(element: HTMLElement): { left: number; top: number };
```

```javascript
offset(document.getElementById("app"));
```
