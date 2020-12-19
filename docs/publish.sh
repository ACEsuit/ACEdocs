#!/bin/bash
cd ~/.julia/dev
if [ -d "ACEdocs_gh" ]
then
    echo "ACEdocs_gh already exists."
else
    echo "ACEdocs_gh does not yet exist - cloning from git repo."
    git clone https://github.com/JuliaMolSim/ACEdocs.jl.git ACE_gh
fi
cd ACEdocs_gh
echo "make sure gh-pages is checked out"
git checkout gh-pages
echo "obtain doc build from ~/.julia/ACEdocs/doc/build"
cp -R ../ACEdocs/docs/build/* ./dev/
echo "commit changes"
git add dev/*
git commit -a -m "update online docs"
echo "push to gh-pages"
git push origin gh-pages
cd ~/.julia/dev/ACEdocs/docs
