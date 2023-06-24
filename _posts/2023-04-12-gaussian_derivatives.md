---
layout: post
title: Differentiating the multivariate Gaussian PDF with respect to time
date: 2023-04-12
description: Taking the time derivative of the probability density function of the multivariate Gaussian distribution, when the mean and covariance both depend on time. Also known as fun with the chain rule!
related_posts: false
published: false
---


>[!tl;dr]
> Consider an $n$-dimensional multivariate Gaussian distribution for which the mean $\mu$ and the covariance both vary with time $t$. Then, the PDF of this distribution is 
$$
p\left(x,t\right) = \frac{1}{\sqrt{2^n\pi^n\det\left(\Sigma(t)\right)}}\exp\left[-\frac12\left(x - \mu(t)\right)^T\Sigma(t)^{-1}\left(x - \mu(t)\right)\right]
$$
   Using the chain rule, we arrive at 
   $$
   \frac{\partial p}{\partial t} = 
$$




Rather than computing all of the derivatives here myself, I am going to pull some results from the [Matrix Cookbook](http://www2.imm.dtu.dk/pubdb/edoc/imm3274.pdf), which is a fantastic resource for when you are working with multivariable calculus and matrices. Conveniently, some results on the multivariate normal distribution are also included there.

OK, now onto the maths. Suppose we are interested in the $n$-dimensional multivariate Gaussian distribution $\mathcal{N}\!\left(\mu(t), \Sigma(t)\right)$, where both the $\mathbb{R}^n$-valued mean $\mu$ and $n\times n$ covariance matrix $\Sigma$ depend on some parameter $t$. The probability density function (PDF) for our Gaussian distribution can then be thought of as both a function of the variable $x$ and time $t$, i.e. 

$$
p\left(x,t\right) = \frac{1}{\sqrt{2^n\pi^n\det\left(\Sigma(t)\right)}}\exp\left[-\frac12\left(x - \mu(t)\right)^T\Sigma(t)^{-1}\left(x - \mu(t)\right)\right]
$$

We need to use the chain rule to calculate $\frac{\partial p}{\partial t}$, but since we are dealing with vector- and matrix-valued functions, this is not so straightforward. The density $p$ is a scalar-valued function and $t$ is a scalar input, so $\frac{\partial p}{\partial t}$ should also be scalar-valued. Thinking of the chain rule in terms of these vectors and matrices is complicated, so I prefer to do things componentwise. Really, $p$ is just a function taking in $n + n^2$ numbers, being the components of $\mu$ and $\Sigma$. The fact that these components are organised into vectors and matrices doesn't matter for the purposes of the chain rule. The derivative is just the sum of all these individual contributions, like so 
$$
\frac{\partial p}{\partial t} = \sum_{i=1}^n\frac{\partial p}{\partial \mu_i}\frac{\partial{\mu_i}}{\partial t} + \sum_{i=1}^n\sum_{j=1}^n\frac{\partial p}{\partial \Sigma_{ij}}\frac{\partial\Sigma_{ij}}{\partial t}.
$$
Since we insist on using the vector/matrix notation, we can recognise the above as 

$$
\frac{\partial p}{\partial t} = \left(\frac{\partial p}{\partial \mu}\right)^T\frac{\partial \mu}{\partial t} + \mathrm{tr}\left(\left(\frac{\partial p}{\partial \Sigma}\right)^T \frac{\partial\Sigma}{\partial t}\right).
$$

Fantastic!





Now, we need to take those derivatives $\frac{\partial p}{\partial \mu}$ and $\frac{\partial p}{\partial \Sigma}$, which is where the [Matrix Cookbook](http://www2.imm.dtu.dk/pubdb/edoc/imm3274.pdf) comes in handy. 






