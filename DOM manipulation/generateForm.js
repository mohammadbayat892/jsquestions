function generateForm(inputs) {
    if (!Array.isArray(inputs) || inputs.length === 0) {
      return ''; // اگر لیست ورودی‌ها نامعتبر باشد یا خالی باشد، خروجی خالی برگردانید.
    }
  
    const formElements = inputs.map(input => {
      if (input.type === 'text') {
        return `
          <div>
            <label for="${input.id}">${input.label}</label>
            <input type="${input.inputType}" id="${input.id}" placeholder="${input.placeholder}">
          </div>
        `;
      } else if (input.type === 'checkbox') {
        return `
          <div>
            <input type="checkbox" id="${input.id}">
            <label for="${input.id}">${input.label}</label>
          </div>
        `;
      } else if (input.type === 'select' && input.options && input.options.length > 0) {
        const options = input.options.map(option => {
          return `<option value="${option.value}">${option.label}</option>`;
        }).join('');
  
        return `
          <div>
            <label for="${input.id}">${input.label}</label>
            <select id="${input.id}">
              ${options}
            </select>
          </div>
        `;
      }
  
      return ''; // در صورتی که نوع ورودی نامعتبر باشد، خروجی خالی برگردانید.
    });
  
    // ترکیب تمام المان‌های فرم به یک رشته و ایجاد فرم نهایی
    return `
      <form>
        ${formElements.join('')}
        <button type="submit">Submit</button>
      </form>
    `;
  }
  
  // لیست ورودی‌های فرم
  const formInputs = [
    {
      id: 'firstName',
      type: 'text',
      label: 'نام:',
      placeholder: 'نام خود را وارد کنید...',
      inputType: 'text',
    },
    {
      id: 'lastName',
      type: 'text',
      label: 'نام خانوادگی:',
      placeholder: 'نام خانوادگی خود را وارد کنید...',
      inputType: 'text',
    },
    {
      id: 'email',
      type: 'text',
      label: 'ایمیل:',
      placeholder: 'ایمیل خود را وارد کنید...',
      inputType: 'email',
    },
    {
      id: 'experiences',
      type: 'select',
      label: 'میزان سابقه:',
      options: [
        { value: '1', label: '1 سال' },
        { value: '2', label: '2 سال' },
        { value: '3', label: '3 سال' },
        { value: '4', label: '4 سال' },
        { value: 'more-than-4', label: 'بیش از 4 سال' },
      ],
    },
  ];
  
  // فراخوانی تابع generateForm و نمایش خروجی
  const formHtml = generateForm(formInputs);
  document.getElementById('formContainer').innerHTML = formHtml;
  