---
layout: post
title: The Fokker-Planck equation and Green's functions
date: 2023-05-13
description: Showing that a neat trick from PDEs is consistent with the Fokker-Planck equation.
related_posts: false
published: false
---

Consider a stochastic differential equation in $n$-dimensions of the form 
$$
dx_t = u\left(x_t, t\right)dt + \sigma\left(x_t, t\right)dW_t
$$
where $u: \mathbb{R}^n \times \mathbb{R} \to \mathbb{R}^n$ is the drift coefficient, $\sigma: \mathbb{R}^n \times \mathbb{R} \to \mathbb{R}^{n \times m}$ is the diffusion matrix coefficient, and $W_t$ is the canonical $m$-dimensional Wiener process (or Brownian noise). 


Remarkably, the time-evolution of the solution to the SDE is completely equivalent to the solution of a partial differential equation, the Fokker-Planck equation! The probability density function $\rho = \rho(x,t)$ for the solution to our SDE at time $t$ is governed by the corresponding Fokker-Planck equation
$$
\begin{equation}
\frac{\partial \rho}{\partial t} = -\nabla\cdot\left(\rho(x,t)u(x,t)\right) + \frac{1}{2}\nabla\cdot\nabla\cdot\left(\rho(x,t)\sigma(x,t)\sigma(x,t)^T\right). \label{eq1}
\end{equation}
$$


When we consider an SDE with a fixed initial condition $x_0$, this is equivalent to assigning the initial condition 
$$
\rho(x,0) = \delta(x - x_0),
$$
which is the Dirac-Delta "function"[^1]


Consider a fixed time $t$. Let $\mathcal{P}$ denote the solution operator of the Fokker-Planck equation, so for an initial density $\rho_0(x)$, $\mathcal{P}\set{\rho_0}$ is the corresponding solution of $\eqref{eq1}$ at time $t$. 



But here is the really neat thing. The probability density function for the sum of two independent random variables is given by the convolution of the two respective PDFs. Conversely, this means that a convol




[^1]: It's not really a function in the strict sense, but can be interpreted as a probability distribution.



