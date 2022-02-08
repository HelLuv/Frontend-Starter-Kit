class OptionsController {
  packageManagers = [
    {label: 'yarn', id: "yarn"},
    {label: 'npm', id: "npm"},
    {label: 'npx', id: "npx"}
  ]

  frameworks = [
    {label: "Vanilla React", id: "vanilla"},
    {label: "NextJS", id: "nextjs"},
    {label: "Remix", id: "remix"},
  ]
}

export default new OptionsController();