module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/pdf-report',
     handler: 'pdf-report.create',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
