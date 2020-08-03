const getGdprListData = () => {
  return {
    privacyCenter: [
      {
        id: 'performanceAndFunctionality',
        title: 'Performance and Functionality',
        value: false,
        text:
          'These data are used to enhance the performance and functionality of our websites. They provide statistics on how our website is used and helps us improve by measuring errors. Certain functionality on our website may become unavailable without these cookies.',
      },
      {
        id: 'analytics',
        title: 'Analytics',
        value: false,
        text:
          'These cookies collect information that is used in aggregate form to help us understand how our websites are used, and also helps us to continuously improve the experience we provide to you.',
      },
      {
        id: 'socialMedia',
        title: 'Social Media',
        value: false,
        text:
          'These cookies are used to enable sharing or following of content that you find interesting on our websites. These settings apply to third party social networking and other websites.',
      },
    ],
  };
};

export default getGdprListData;
