---
layout: post
title: The finite-time Lyapounov exponent from probabilities
date: 2023-07-14
description: Explaining how the finite-time Lyapunov exponent of a dynamical system can be equivalently formulated when the initial conditions follows some probabilitty distribution.
related_posts: false
published: true
---

Suppose we have an $n$-dimensional dynamical system given by the ordinary differential equation
$$
\frac{\mathrm{d}w}{\mathrm{d}t} = u\left(w, t\right).
$$

The FTLE is a generalisation 




Below is an example of the finite-time Lyapunov exponent computed over a region of the Gulf Stream, in the North Atlantic ocean. 


We then ask the question "in which direction is there the most stretching?".


There is a slightly different perspective we can employ, where instead of thinking of a deterministic 

(e.g. see Balasuriya 2020)

So, we fix an initial point $x \in \Omega_0$ and take a **random** perturbation $\epsilon z$, where $z \sim \mathcal{N}(0,I)$ and $0 < \epsilon \ll 1$ is some small scaling parameter. Then, using the change of variables formula, we know that the probability density function of $w = F_0^t(x + \delta)$ satisfies 
$$
p_w(w) = \mathcal{N}\left(F_t^0\!\left(w\right); 0, \epsilon^2 I \right)\left|\det{\nabla F_t^0(w)}\right|
$$

We once again ask the question - in what direction is there the most stretching? But we are now dealing with a random quantity, so this question is not as well-defined. 



## References
- Balasuriya, Sanjeeva. 2020. “Uncertainty in Finite-Time Lyapunov Exponent Computations.” _Journal of Computational Dynamics_ 7 (2): 313–37. [https://doi.org/10.3934/jcd.2020013](https://doi.org/10.3934/jcd.2020013).





