var documenterSearchIndex = {"docs":
[{"location":"gettingstarted/#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"(this is an early draft of this document; please send me comments!)","category":"page"},{"location":"gettingstarted/#Installation","page":"Getting Started","title":"Installation","text":"","category":"section"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"Install Julia, the latest versions of ACE.jl require v1.3 but should also work ok with v1.4, future versions will likely require v1.4.\nInstall the MolSim registry; from the Julia REPL, switch to package manager ] and then run","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"registry add https://github.com/JuliaMolSim/MolSim.git","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"Install some important registered packages; from Julia REPL / package manager:","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"add PyCall IJulia     # add more important packages from General registry\nadd JuLIP ACE ASE   # maybe add other packages from MolSim registry","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"For fitting, need to install also IPFitting.jl,","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"add IPFitting","category":"page"},{"location":"gettingstarted/","page":"Getting Started","title":"Getting Started","text":"(Keep fingers crossed and hope it will be compatible with the current version of ACE.jl...)","category":"page"},{"location":"gettingstarted/#Workflow","page":"Getting Started","title":"Workflow","text":"","category":"section"},{"location":"degree/#Notes-on-what-degree-means","page":"-","title":"Notes on what degree means","text":"","category":"section"},{"location":"degree/","page":"-","title":"-","text":"for the radial basis it seems natural that we want to use the index 1 as the first basis function and the degree is just the highest index.","category":"page"},{"location":"envpairbasis/#Pair-Potential-with-Environment","page":"ED-Bonds","title":"Pair Potential with Environment","text":"","category":"section"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"To be used either as an environment-dependent pair potential for modelling PES, or as an environment-dependent bond integral for TB models.","category":"page"},{"location":"envpairbasis/#Specification-of-the-basis","page":"ED-Bonds","title":"Specification of the basis","text":"","category":"section"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"The bond is defined by a vector barbm r,and the environment by vectors  bm r_j _j = 1^J. We assume that barbm r is vector between an atom at position bm 0 and barbm r. The vectors bm r_j are therefore relative to bm 0.","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"Alternatively, we could think of barbm r as describing the bond between two atoms at position pm frac12 barbm r and the bm r_j being distance vectors from bm 0 which is now the bond mid-point.","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"We think of the potential as being of the form","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"   Vbig( barbm r  bm r_j _j big)\n   = sum_N sum_j_1  dots  j_N\n   V_Nbig(barbm r  bm r_j_a _a = 1^N big)","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"We now construct a cylindrical coordinate system (r_j theta_j z_j) via","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"beginaligned\n  barr = barbm r \n  bm r_j = r_j cos theta_j bm e_x + r_j sintheta_j bm e_y\n               + z_j bm e_z\nendaligned","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"where the orthonormal frame bm e_x bm e_y bm e_z are defined by","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"   bm e_z = fracbarbm rbar r","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"and is otherwise chosen arbitrarily. The choice of bm e_xbm e_y are therefore only unique up to a rotation about the bm e_z axis, but since all quantities of interest will be rotation-invariant, this will not affect the results. (hopefully, depends on numerical stability!)","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"We now rewrite V_N in the form","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"   V_N = V_Nbig(bar r  bm c_j_a _a = 1^N big)\n   qquad bm c_j = (r_j theta_j z_j)","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"We expand into a polynomial basis,","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"   V_N sim sum_bm k bm l bm m\n   theta_barm bm klm\n   barP_barm(barr) times prod_a = 1^N P^r_k_a(r_j_a) e^i l_a theta_j_a P^z_m_a(z_j_a)","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"and apply the density trick,","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"beginaligned\n   mathcalV_N = sum_j_1  dots  j_N\n   V_Nbig(barbm r  bm r_j_a _a = 1^N big)  \n   sim\n   sum_bm k bm l bm m\n   theta_barm bm klm\n   prod_a = 1^N\n   A_barm k_a l_a m_a \n   \n   A_barm klm =\n      sum_j = 1^J phi_barmk l m(barr bm c_j) \n   phi_barmk l m(barr bm c_j)\n      = barP_barm(barr) P^r_k(r_j) e^i l theta_j P^z_m(z_j)\nendaligned","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"So we can simplify this to","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"beginaligned\n   A_barm klm\n   =\n   barP_barm(barr)\n   sum_j = 1^J\n   phi_k l m(bm c_j) \n   \n   phi_k l m(bm c_j)\n      = P^r_k(r_j) e^i l theta_j P^z_m(z_j)\nendaligned","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"This suggests the following assembly order","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"   mathcalV_N\n   sim\n   sum_bm klm A_bm klm sum_bar m theta_barmbm klm barP_barm(barr)","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"But this assumes that all barm have the same list of bm klm, which misses a lot of opportunity for sparsification. So if we want to keep the option to sparsify agressively, then we should keep","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"mathcalV_N\nsim\nsum_barm bm klm theta_barmbm klm barP_barm A_bm klm","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"To reduce storage one could still store the two arrays","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"      (barP_bar m)_bar m qquad (A_klm)_klm","category":"page"},{"location":"envpairbasis/","page":"ED-Bonds","title":"ED-Bonds","text":"separately rather than its tensor product.","category":"page"},{"location":"intro/#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"intro/","page":"Introduction","title":"Introduction","text":"This package implements approximation schemes for permutation and isometry invariant functions, with focus on modelling atomic interactions. It provides constructions of symmetric polynomial bases, imposing permutation and isometry invariance. Heavy use is made of trigonometric polynomials and spherical harmonics to obtain rotation invariance.","category":"page"},{"location":"intro/","page":"Introduction","title":"Introduction","text":"The main scheme currently implemented is based on the Atomic Cluster Expansion (ACE) described in","category":"page"},{"location":"intro/","page":"Introduction","title":"Introduction","text":"Drautz, R.: Atomic cluster expansion for accurate and transferable interatomic potentials. Phys. Rev. B Condens. Matter. 99, 014104 (2019). doi:10.1103/PhysRevB.99.014104","category":"page"},{"location":"intro/","page":"Introduction","title":"Introduction","text":"A more detailed description and variations are discussed in","category":"page"},{"location":"intro/","page":"Introduction","title":"Introduction","text":"  M. Bachmayr, G. Csanyi, G. Dusson, S. Etter, C. van der Oord, and C. Ortner. Approximation of potential energy surfaces with spherical harmonics. arXiv:1911.03550v2; [http](https://arxiv.org/abs/1911.03550) [PDF](https://arxiv.org/pdf/1911.03550.pdf)","category":"page"},{"location":"intro/","page":"Introduction","title":"Introduction","text":"There are also implementations of pure permutation invariant bases and of bases with only cylindrical symmetries for bond energies.","category":"page"},{"location":"devel/#Developer-Documentation","page":"Developer Docs","title":"Developer Documentation","text":"","category":"section"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"warning: WARNING\nThis documentation described what will be implemented on the rewrite branch, and not what is currently implemented!","category":"page"},{"location":"devel/#General-Notes","page":"Developer Docs","title":"General Notes","text":"","category":"section"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"Always use Int for indexing, never Int16, Int32, etc.\nThere is a lot of switching between a species given by an AtomicNumber type and the index of that species in a list, given by an Int. Functions dispatch on Int vs AtomicNumber to make sure there is no confusion.","category":"page"},{"location":"devel/#Types-and-type-hierarchy","page":"Developer Docs","title":"Types and type hierarchy","text":"","category":"section"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The ACE.jl package heavily utilizes composition (as opposed to inheritance), which is well aligned with Julia's type system and recommended style. Basis sets and calculators are built from the following two base types:","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"OneParticleBasis : abstract supertype of a 1-particle basis\nPIBasis : concrete implementation of a permutation-invariant basis","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"For example, a rotation-invariant site energy basis set (ACE and extensions) RPIBasis is built from a PIBasis and the coupling coefficients. The PIBasis itself is specified in terms of the OneParticleBasis.","category":"page"},{"location":"devel/#One-Particle-Basis","page":"Developer Docs","title":"One Particle Basis","text":"","category":"section"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"A one-particle basis is a basis of functions phi_k  mathbbR^3 to mathbbR defined through a subtype of","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"abstract type OneParticleBasis end","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"Concrete subtypes must be able to compute the projection of the atom density onto the one-particle basis:","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"  A_k^z z_0(  (bm r_j z_j) _j = 1^J z_0 )\n   = sum_j  z_j = z phi_k^z_j z_0(bm r_j)","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"where z_0 is the atom number of the centre-atom, and (bm r_j z_j) are relative positions and atom numbers of neighbours.","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The \"standard\" evaluation of a single phi_k(bm r z z_0) is of course a special case. In addition, the gradients of individual basis functions, nabla phi_k(bm r z z_0) must be provided; this gradient is taken with respect to bm r.","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"Assuming that basis isa OneParticleBasis, this is done with the following interface:","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"A = alloc_B(basis)                # allocate storage for A = [ A_z for iz=1:NZ ]\ntmp = alloc_temp(basis, args...)        # allocate temporary arrays\nevaluate!(A, tmp, basis, Rs, Zs, z0)    # fill A = [ A_z for iz=1:NZ ]","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"For the gradients the following must be provided:","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"dPhi = alloc_dB(basis)                     # storage for (∇ϕ_k)_k\ntmpd = alloc_temp_d(basis, args...)        # temporary storage\nevaluate_d!(dPhi, tmpd, basis, R, z, z0)   # fill dPhi with (∇ϕ_k)_k","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The interface does not require evaluate_d!(dPhi, tmpd, basis, Rs, Zs, z0).","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"There is a lot of code duplication in the implementation of OneParticleBasis, which we can avoid by a generic implementation of evaluate! which loops through all (R, z) in zip(Rs, Zs) and then calls","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"add_into_A!(A[iz], tmp, basis, R, iz, iz0)","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"an implementation of OneParticleBasis then only needs to overload add_into_A! which should evaluate phi_k^z z_0(bm r) (where R represents bm r) and add these values into A[k]. For this to work, the type of the 1-particle basis must contain a field zlist which implements the interface defined by JuLIP.Potentials.ZList and JuLIP.Potentials.SZList.","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"To build a PIBasis (see below) the OneParticleBasis musts also provide methods that specify it:","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"get_basis_spec(basis::BasicPSH1pBasis, z0::AtomicNumber)\nget_basis_spec(basis::BasicPSH1pBasis, z0::AtomicNumber, i::Integer)","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The first of these should return a Vector containing OnepBasisFcn objects that specify the list of 1-particle basis functions for a centre atom of species z0. The second method should return precisely the ith element of this vector. A concrete OneParticleBasis may either simply keep these specifications stored throughout its lifetime, or generate them on the fly, whichever is most convenient.","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"note: Concrete subtypes of `OneParticleBasis`\nConcrete subtypes of OneParticleBasis areBasicPSH1PBasis : implemented and tested\nPSH1PBasis : parameterised version of BasicPSH1Basis; under construction\nBondEnv1PBasis : implemented in old code, needs to be ported\nTensor1PBasis : not yet doneShould revisit this and maybe add another abstract layer in-between since all of these are really tensor product bases! (Reference relevant sections below)","category":"page"},{"location":"devel/#Permutation-Invariant-Basis","page":"Developer Docs","title":"Permutation-Invariant Basis","text":"","category":"section"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The permutation-invariant basis is a concrete type","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"struct PIBasis end","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"which implements the tensor-product like basis functions","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"   bm A_bm z bm k^z_0\n   =\n   prod_alpha = 1^N A_k_alpha^z_alpha z_0\n   qquad textwhere quad\n   bm z in mathbbZ^N bm k in mathbbN^N","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"as well as the gradients","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"   fracpartial A_bm z bm k^z_0partial bm r_j","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The interface for this is as follows:","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"alloc_B(pibasis::PIBasis)\nalloc_tmp(pibasis::PIBasis)\nevaluate!(AA, tmp, pibasis, Rs, Zs, z0)\nalloc_dB(pibasis::PIBasis)\nalloc_tmp_d(pibasis::PIBasis)\nevaluate_d!(dAA, tmp, pibasis, Rs, Zs, z0)","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"where the storage arrays are","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"AA::Vector{<: Number} : to store any AA_kk^{zz, z0} with z0 fixed, i.e. the AA vector for a single site only. To use a PIBasis as the actual basis rather than an auxiliary one should wrap it (see bonds – TODO!)\ndAA::Matrix{<: JVec} with dimension basis-length x number of particles","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"We don't provide a detailed description here of the implementation, since it is already the final product. But we can summarize the functionality that is provided that can be used to construct further basis sets from it.","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"TODO","category":"page"},{"location":"devel/#Generating-a-OneParticleBasis-and-PIBasis-via-gen_sparse","page":"Developer Docs","title":"Generating a OneParticleBasis and PIBasis via gen_sparse","text":"","category":"section"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"TODO","category":"page"},{"location":"devel/#Derived-Potentials","page":"Developer Docs","title":"Derived Potentials","text":"","category":"section"},{"location":"devel/#RPI-Basis-(ACE-and-Extensions)","page":"Developer Docs","title":"RPI Basis (ACE and Extensions)","text":"","category":"section"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The ACE basis (Atomic Cluster Expansion; Drautz 2019) and its modifications and extensions is one of the main user-facing objects provided by ACE.jl. It is constructed by reducing a permutation invariant PIBasis to a permutation and rotation invariant basis through a single sparse matrix-vector multiplication.","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":" B = C cdot bm A","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"where B is the new RPI basis, bm A the \"inner\" PI basis and C the coupling coefficients that achieve the rotation-invariance. This relies on a specific choice of the one-particle basis. This construction is outlined in (Atomic Cluster Expansion; Drautz 2019) and an extended derivation with full details in (Bachmayr, Drautz, Dusson, Etter, Van der Oort, Csanyi, Ortner, arXiv:19..). The implementation of the C coefficients in rpi/rotations3d.jl is based on a numerical SVD as opposed to an analytic SVD.","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"The RPIBasis type stores only three fields: the PIBasis, the coefficients C, and some index management to map the local site basis into a global basis (only needed for multiple species).","category":"page"},{"location":"devel/","page":"Developer Docs","title":"Developer Docs","text":"TODO: discuss the classes of 1-particle bases that are allowed.","category":"page"},{"location":"devel/#Bond-Environment-Potentials","page":"Developer Docs","title":"Bond-Environment Potentials","text":"","category":"section"},{"location":"#ACE.jl-Documentation","page":"Home","title":"ACE.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package implements approximation schemes for permutation and isometry invariant functions, with focus on modelling atomic interactions. It provides constructions of symmetric polynomial bases, imposing permutation and isometry invariance. Heavy use is made of trigonometric polynomials and spherical harmonics to obtain rotation invariance.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"intro.md\", \"gettingstarted.md\", \"devel.md\", \"envpairbasis.md\"]\nDepth = 3","category":"page"}]
}