function render(element) {
    if (!element || !element.name) {
      return ''; // در صورتی که آبجکت نامعتبر باشد، خروجی خالی برگردانید.
    }
  
    const { name, attributes, children } = element;
  
    // پردازش ویژگی‌ها
    const attributeString = attributes
      .map(attribute => `${attribute.key}="${attribute.value}"`)
      .join(' ');
  
    // پردازش فرزندان
    const childrenString = children
      .map(child => (typeof child === 'object' ? render(child) : child))
      .join('');
  
    // ساخت تگ و اعمال ویژگی‌ها و فرزندان
    return `<${name} ${attributeString}>
              ${childrenString}
            </${name}>`;
  }
  
  // آبجکت ورودی
  const inputObject = {
    name: 'html',
    children: [
      {
        name: 'body',
        children: [
          {
            name: 'div',
            attributes: [
              { key: 'class', value: 'container' },
              { key: 'id', value: 'some-id' }
            ],
            children: ['Salam', {
              name: 'p',
              attributes: [{ key: 'class', value: 'text-bold' }],
              children: ['Some Text']
            }]
          }
        ]
      }
    ]
  };
  
  // فراخوانی تابع render و نمایش خروجی
  const renderedHtml = render(inputObject);
  console.log(renderedHtml);
  