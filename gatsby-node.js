exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/sponsor",
    toPath: "/sponsor.pdf",
    isPermanent: true,
  })
}
