module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-us-east-1.graphcms.com/v2/ckq2dupkm0sm401xi64dl455a/master",
        token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjQwMjg2MDAsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrcTJkdXBrbTBzbTQwMXhpNjRkbDQ1NWEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTlmMTc2OWItYzk5OC00NzQ0LTg4Y2QtODBjN2RmMmQ0ZjgzIiwianRpIjoiY2txMmdwNDJtNDFkdzAxeXhoaHpuOWY3OCJ9.yD5AObl1W4E7TTdHa_M2vIP2rrPEOLDHL-43T_QvO6F-lxJsnVbmh0a8wIMM0wLhkdTBG1B3X7AKv-YrOvV-8wwWQjlho71sUPFshzmynDVgmoWiqp6CIAIqVKh64PuxbISikc6E8XHKsYjw_-gux3KEpk73QY8SgNbXfpc5RAgOFNzAS6pYJJl54SboZRKDM_241er63UyD5b_QMwMKKJ1D48Ir85a4WR3XUjwpa-RfRjLNWxW6LUxhgsL2js-U8Wdakd5bwf-aUuMX44Ut0kcVBQyT_DogT05sQDOGW3R94qa2Vs-A9FwO_VDbyRQ4CVKkx7zxZbX_Z7pBrKUhn_77CL7NDUZ2Td2fOkU8foyOh-9TSrx9hje3Ad_okVj2jucltIAl19p1TDZ_sdFdNF6BsZEnZmvWRG24JtE6BsWI_z5U9Ma0_MgWZsXTeO6NIfs7UzoXsU3iUpnD010jBdVacBfdYUD1eLUgzulOIKfqUdr64YBmo-xxCdBuzwpXZkvgRkHWimiQWJHNGmFZmWxK7tEezRlkFUrr8MXUB-swEJ4n-AamlDM4gEx1q7ePBkxg2ofwGqd4ORSNATAYt9Y30HdZU0AKsMq-hPnS_APLOHw4oGmkb9fjWVqNoyaMZ6NgJui1gr0LtuZyR2drh-XGFxAMfxNdrEazVlXg_YA",
        stages: ['DRAFT', 'PUBLISHED'],
        downloadLocalImages: true,
      },
    },
  ],
};
