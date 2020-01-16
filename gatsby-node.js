exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/sponsor",
    toPath: "/sponsor.pdf",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/promo",
    toPath:
      "https://docs.google.com/document/d/1A_46M2Aihc3p7H1pfZSbYuz9d9_unxMZjckrZ2mpXyE/",
  })
  createRedirect({
    fromPath: "/waiver",
    toPath: "/waiver.pdf",
    isPermanent: true,
  })
}
