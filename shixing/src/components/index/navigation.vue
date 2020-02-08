<template>
  <!-- navigation -->
  <div class="navigation home-navigation">
    <p class="switchcity">苏州 ^</p>
    <div class="fresh-search-bar">
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMjcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5zdmcvaG9tZV9zZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6aaW6aG1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjY4LjAwMDAwMCwgLTcxLjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSLmkJzntKIiIGZpbGw9IiNBQ0E5QTkiIHN0cm9rZT0iI0FDQTlBOSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOTIuNTA1MzQ4LDk2Ljc0MzM0MDkgTDI4OC43MzY4ODYsOTIuOTc1MjE2IEMyODYuNjQxMjExLDk0Ljc4NDcwOSAyODMuOTQ0Nzk5LDk1LjkxNzU5NyAyODAuOTU5MDU5LDk1LjkxNzU5NyBDMjc0LjM1NDY0NSw5NS45MTc1OTcgMjY5LDkwLjU2MzYzMTkgMjY5LDgzLjk1ODU2ODUgQzI2OSw3Ny4zNTMwNDUxIDI3NC4zNTQ2NDUsNzIgMjgwLjk1OTA1OSw3MiBDMjg3LjU2MzkzMyw3MiAyOTIuOTE4NTc4LDc3LjM1MzA0NTEgMjkyLjkxODU3OCw4My45NTg1Njg1IEMyOTIuOTE4NTc4LDg2Ljk0NDY0NTkgMjkxLjc4NTE4NCw4OS42NDA0ODY5IDI4OS45NzYwNzcsOTEuNzM2NTM2NiBMMjkzLjc0NDA3OCw5NS41MDQyMDE1IEMyOTQuMDg1Mzg0LDk1Ljg0NjQxMzcgMjk0LjA4NTM4NCw5Ni40MDA2Njg3IDI5My43NDM2MTgsOTYuNzQzMzQwOSBDMjkzLjQwMTg1Miw5Ny4wODU1NTMgMjkyLjg0NzU3NCw5Ny4wODU1NTMgMjkyLjUwNTM0OCw5Ni43NDMzNDA5IFogTTI5MS4wNzgxOTIsODMuOTU4NTY4NSBDMjkxLjA3ODE5Miw3OC4zNzA5NDI0IDI4Ni41NDczNzQsNzMuODM5MzkwNiAyODAuOTU4NTk5LDczLjgzOTM5MDYgQzI3NS4zNzAyODQsNzMuODM5MzkwNiAyNzAuODM5NDY2LDc4LjM3MDk0MjQgMjcwLjgzOTQ2Niw4My45NTg1Njg1IEMyNzAuODM5NDY2LDg5LjU0NzU3NDUgMjc1LjM3MDI4NCw5NC4wNzg2NjY0IDI4MC45NTg1OTksOTQuMDc4NjY2NCBDMjg2LjU0NzM3NCw5NC4wNzg2NjY0IDI5MS4wNzgxOTIsODkuNTQ4MDM0NCAyOTEuMDc4MTkyLDgzLjk1ODU2ODUgTDI5MS4wNzgxOTIsODMuOTU4NTY4NSBaIiBpZD0iaG9tZV9zZWFyY2giPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
        alt
      />
      <p>0.99起抢3斤西山蜜桔</p>
    </div>
    <div calss="membercode">
        <img class="memImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAG2UlEQVR4Xu1cXWwUVRQ+Z7q7lf4IWlt/IsHYEh80KtzZXbYVqKjVypORJiSamOiLkuiTAvqglfgA6pMx0UciiQ9WTBRMY02gEW27zL1N/MGfIKWARqxUtC20292ZY852tplu2c5ud2kL3pNsmu7ce+6db849e+93zhwELXMigNlXm5qaqhOJxDoiEoi4ohT4EREBwKmysjIZj8cVIvL/BUt7e7tx4MCBsGEYwnGclYg4a/4FK53qMGwYhrJtu08pddGrY8YApmk+SkT7ACAAAOXuZ55jzup2AQD4nr4loq1KqdOFKI7FYg3JZLKDiFa7/SoL6T9XW0ScAICk4zjjiMhzO5xpPw2QC87HALCsVAPn0JMEgH8BoEEpxX99pbGxsS6RSBwHgAr34fn2KaIBg/WQUupr1pEGqKWlpXJ4ePgUANQUoTjvrog4TkQdSqmn8ulkmuZnRNRSYovOOTQR/V5fX397R0fHZBog0zQfJKL9AHBtPhMuUZsLSqkqP13Nzc2B0dFR9gtBv7YlvD6GiA9IKY9mANpORLuyntAkAPxZokHLAOA67/J11/2dUsqBucaIRqN3p1KpHgDw+pwJRDznOv9STPGmrAfA/vIlpdR7GYB2E9GOrJGOKaXuKsXoTU1Nt0xMTAx6J0FEY2VlZZssy7LmGsM0zWYi+jTbugOBwPJ4PD5SivkJIU4CwG0eXewndyml3tAAAYAGyMfMNEAaoOI8kbYgbUHagvTPfC4b0PsgvVEE0DtpHx+pAdIAFfczqi1IW5C2IM0HaT4o9yrQh1X/wyqznatyMorhcPhlx3Fey+KkE0R0ojjvM9UbETlcU+eGbTIqxwOBwD3xeJzDOTnFNM01RPQVAEwT/ESUQMRBIrJLNL8GAAh5dF1ExB1SynfTlGskEnnYtu2PFjKqwaS9ZVkVflHWtra20MDAAJPoHMxcEEHEUQBolVJ+kwYoGo1em0qlziwgQGwBnVLKx/K5Y9M0vySijQsY+hkOhUIre3t7x6cjq0KINgDYm7UM8pl/QW0Q0SaiC+Xl5at7enqG8ukcjUZvTaVSP7thIyOfPkW04fDz41LKzrR78CoKh8NPOI7zPiI6RMRxKI5nlURcv8HhlDOBQGBLPB7/sRDF4XD4XsdxODR+o+svvD6jEFWz2mYemusvn5ZSchA1LbOyI9avX187MTFxv+M4YQC4oaiRM4MgEiIeJyJZVVV1uLu7OzUfveyPBgcHNzmOYwJA/Xx0XKoPEQ0ZhmEFg8FDvb29f3vblCp9pFRzXXJ6NEA+j0QDpAEqbtVqC9IWpC2oOAS0BRWH3xWzUQyHwxuJaA0iHrUsizPOSiqNjY2rksnkZiI6X1tb+0lnZ2di1k56gY4ap4PB4Ja+vr6f8r1DIcRbALDN3fmTYRh7LMvilMGSiBAiCgCHAIDzt/lzuq6ubi2DtFiH1bGKiorVR44c+cvvDiORSI1t239kneRTNTU1K7q6upgGKVqEEMw33ec5eo0ZhvG8ZVl7F4Xu4IMrABzs7+/f4nd3/HQRkemOak9bJrSiUsof/Prnc900zbNExIfgjLAV7VZKvbKYhNm4ZVmVfoRZJBKJ2bb9BQB4AWLLiSmlvs8HAL82QgjO5mXGc1oQcY+UcmcaICHETgBoz6ZcAeAXP+V5XmdqgjlfbxZ/XpTrkgDINM0lG/aJRqPrUqlU16JakAbIZ4ktZYDms8RisdiyZDL5LBFtIKKToVDonb6+Pg7tXFJ8fdDVBpBL8je5Po9pXubA78jFgf+vAGptbS0fGhril1+85P4IIj4jpWROe5Zc0QAV6qTdV7vGsn6yR4joOaXUhxqgqXffNEC5NoragqbWSM6dtAZIAzTTjWon7ZNIrgHSABWXaa8tSFuQtiBfzqyYTHu9xPQSuzqW2HYAeJ2IrvGsFy5Ncc53/eTRABHLiIjrgkxz0vmWpiiUMGtubq4aHR3lLFUvAV/0aX4xiptclFJWlTqqcVkAWujyOADANXr2K6We9DPAXHExwzAilmUdy+4/z8MqBya5wElGZsbF+NuFKrCEiEkiGqmurm7o7u7+xw+gWCx2/eTk5NmsyGoyFAot5zzm7P5uOR3+fjrxnAupuJWlPs9BmHHFqQ0eFpLbb5NS7puRvCCE2AwAH1zOEl0A8F15efnWnp4eLuiUlwghdiHii0Tk8E0YhvGqZVlv5+psmuabRPQCAKRfVUDEE8FgMHopQPm6EGItAHD4OV1bDRF/JaKIUio5K7uD1/DY2FhsqRV5M00zAgD83oallOr3QzYSiZi2bXNBuN8qKys7/VKPhRA3G4bxiOM456urqw9m2usUPB+k/wOBOJHBe1FKCwAAAABJRU5ErkJggg==" alt="">
        <p>会员码</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.navigation{
    display:flex;
    align-items: center;
    justify-content: center;
    padding:0 .6rem;
    height:3rem;
    font-size: .875rem;
    color: #666;
    background:#fff;
}
.switchcity{
    width:3rem;
    line-height: 1.2rem;
}
.fresh-search-bar{
    height:2rem;
    width:16rem;
    border-radius: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    margin:0 0.2rem 0 0.4rem;
    background:#eee
}
.fresh-search-bar>img{
    height:0.8rem;
    width:0.8rem;
    margin-right:0.5rem;
}
.membercode{
    display: flex;
    justify-content: center;
    align-items: center;
    height:2.5rem;
    width: 2.5rem;
}
.memImg{
    display: block;
    margin:0 auto;
    height:1.5rem;
    width:1.5rem;
}
</style>