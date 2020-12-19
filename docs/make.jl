


using Documenter, ACE

makedocs(sitename="ACEsuit Documentation",
         pages = [
        "Home" => "index.md",
        "Introduction" => "intro.md",
        "Getting Started" => "gettingstarted.md",
        "Developer Docs" => "devel.md",
        "ED-Bonds" => "envpairbasis.md"
        # "Subsection" => [
        #     ...
        # ]
        ])

# deploydocs(
#     repo = "github.com/JuliaMolSim/ACE.jl.git",
# )
