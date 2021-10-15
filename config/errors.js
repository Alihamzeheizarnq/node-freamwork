const fa = {
    address: `نشانی`,
    age: `سن`,
    area: `منطقه`,
    available: `موجود`,
    city: `شهر`,
    content: `محتوا`,
    country: `کشور`,
    date: `تاریخ`,
    day: `روز`,
    description: `توضیحات`,
    district: `ناحیه`,
    email: `ایمیل`,
    excerpt: `گزیده مطلب`,
    first_name: `نام`,
    firstName: `نام`,
    gender: `جنسیت`,
    hour: `ساعت`,
    last_name: `نام خانوادگی`,
    minute: `دقیقه`,
    mobile: `شماره همراه`,
    month: `ماه`,
    name: `نام`,
    national_code: `کد ملی`,
    password: `رمز عبور`,
    password_confirmation: `تکرار رمز عبور`,
    password_confirm: `تکرار رمز عبور`,
    phone: `شماره ثابت`,
    province: `استان`,
    second: `ثانیه`,
    sex: `جنسیت`,
    size: `اندازه`,
    terms: `شرایط`,
    text: `متن`,
    time: `زمان`,
    title: `عنوان`,
    username: `نام کاربری`,
    year: `سال`,
};
let setlabel = name => fa[name];
let handelErrors = {
    mixed: {
        required: args => `وارد کردن فیلد ${setlabel(args.path)} الزامی میباشد`,
    },
    number: {
        typeError: args => `فیلد ${setlabel(args.path)} باید یه عدد صحیح باشد`,
        min: args => `${setlabel(args.path)} نباید کوچکتر از ${args.min} باشد`,
        max: args => `${setlabel(args.path)} نباید بزرگتر از ${args.max} باشد`,
        lessThan: args => `${setlabel(args.path)} باید کمتر از ${args.less} باشد`,
        moreThan: args => `${setlabel(args.path)} باید بیشتر از ${args.more} باشد`,
    },
    string: {
        email: args => `${setlabel(args.path)} باید یک ایمیل معتبر باشد`,
        min: args =>
            `${setlabel(args.path)} نباید کمتر از ${args.min} کاراکتر داشته باشد.`,
        max: args =>
            `${setlabel(args.path)} نباید بیشتر از ${args.min} کاراکتر داشته باشد.`,
        EmailExists: args => 'cftghcrdftghcr ftghh'
    },
};

module.exports = {
    handelErrors
};