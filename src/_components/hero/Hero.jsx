import IgWindow from "@components/hero/igWindow/IgWindow";
import Image from "next/image";
import Button, { ArrowRight } from "@components/button/Button";

export default function Hero() {
  return (
    <section className="hero__wrapper">
      <div className="hero__left">
        <div className="hero__left-text">
          <h1 className="headline">AURA TATTOO</h1>
          <a href="https://maps.app.goo.gl/J9vr6UWEPDW1nowo7" target="_blank">
            <p>Skipholt 15 , 105 Reykjavik Iceland</p>
          </a>
        </div>
        <div className="hero__left-button">
          <Button link="/booking">
            Booking
            <div className="btn__icon-wrapper">
              <ArrowRight />
            </div>
          </Button>
        </div>
      </div>

      <div className="hero__right">
        <Image
          src="/images/Serene_nero_Anna_tattooing.webp"
          alt="Anna Serene.nero tattoo artist at work"
          fill
          style={{ objectFit: "cover" }}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAfCAIAAAD4PwNWAAAACXBIWXMAAAPoAAAD6AG1e1JrAAANx0lEQVR4nG2XaVAb6ZnHqSnjlSVLQgJJSI2kpltqtWgdWBcCBBgwhywQxiBAQiAQhw5ASMJICIMQ930aY2M8vrBNbMI4djyTzCTZ9cYzuxsmU5nx7mymMlO12Zp1DieTnZ2a3ar9sJWtVhOWTPZfT3W9H9R6f/08/+ftpxNIJBKVSqX9SUlJeDCZ9FQWM5XFZHOS2ZzkFBYjnZ8mEgpEQoEYBhERRIRELJKIRcQahSExDErSQbFQIBamiYX47wUAL10IioQgyAOEfAEAACAPDz7A5XLZqVwW/udsBpNJp9PpSUm0BDKZfEjDYNBZzCQGg57CZvA4bF4qJ42XStxDbCmGQCJQRIRJEUyKyCQHIZcgmFiEiaHDQGEoXShAIBhFpDAshmExCMJQXEKhEAAAHo+HQ7HZKSwGjkOnJxzNCouZlMpiMpl0Nic5jZfKB7hCPsDjcbhcLgzDKIqqFXJtpuqUQokgiFqZGV/LTynkSplUjqFKKSJHRXJUgl8lIikMIemQTIL6uwI7Nx9ORucifWNBXyTQFbLUNkslcj5fyOfzAQBgc5IZcR3Q0Ol0BoPOSWFwWcwUFiOVy8KTzE9LFwrS+Dw2m42imFKhUqk0Op0uOzvbEFe+Ic+gz9aqNRqVUq2Qa5RytRxVZUhPYWI5KsLwIorkCFpZblpdu+LpGVCr8zIVGrU6y2w8H+m/ODE0MxQay1RoAABIjuuAhsGgE14haHg8DmEUMQQKBGkCPqTX6wvyS4xGk9FoMuQVF52pdHuCzlaXxVJvNJpKCgvzcnNytSq96pRGKdcoMuJAEikMySWIIgNDEakht8DT7fcFB3t6Ii5Pf4XZWlZc7Wxu//xfXzpbXay4cBrCtiksRgobz0oKm3HUsCAIihBpnqGwvKLWH4h2enrsja3Dw6NvPv3Bsx///fs//ejDF5/9w/6HFkt9+emCopycPL3OoNXkqFQauVwe95McQYmSwTCMYXKlQpWtz7fXNYWDkZmJxfXlS4Fuf0oKG89NUtJBYlJYDDYnmZfKYXOSUUSEN4hYJJOgEARl5xpMZ80zS1f++D9/fPa3H4zEZr2eXofD6XC0Ols7XK5ul8tTV2s5X2GqKi8zlZwxFhUZi4rysnS5Gl3WKaUuUyWToIoMDEmHUEQik6AoIkFRVIJkIGLC4DAACGg0WgKBctDSXBaPx0nlspQyDBFBsniSIQgyGk2VlZUur+/uw8dfff2fX/z7V8trG+3tnS12h93a2NRot1sbm+utzXUWm+V8g9ncYDZbTCZjUZGpuKwkv9BYVJqr0edqshSoVClXKDBMgUpRRIJAeIuBcXG5XDw3eD+zGIRjeKkcAODyUjlKmVQiFilQqSIDA0FQpdKYTRVNTQ5fb9/E5PLbP3w2N7/a7e5ub3V2NDs64+FuaSMWbU32DputvaGhwVzdWFNfa66ynrNVlpkqSox6bZYhJ0evzSIaUyZB8YMjHZLJZEwm86BSh2Xictn8OA1RJpwGlUIQhGFyk9Foqa1vanK4XB5/bygYCPs9PV2dLp/b63N7e93uoMvb53b3dnqCLi+x7rDZ3C0dTpvDaXNaz9usNfXlJWXnjKaS4jP5hjyCSZGBySSoUial0+m4i4+ahstl83gcHocthnAaTIooMAyGYYPB4Gl319VaWuxN7raOXq8v7O8P+4MXenrCPl8kHhf9/ouBwMVAIBYKjYUi4wMDoa6usG/ggqcn7L3gcrhdDre9rs7R0GitsZiMxpLiM3m5Bq1afUqhVMoVTCaTy+UmHLbS4XEnAHgSsUgpw2usVWuwOFCDxWK3NnpaO3rd3rA/OBwaiIYieEQGxgfwmLp4cXYkuhSLLY1PL41PL49Pj4Ujo5HoSN9gtH/kQlcw2BV0t7R52jo6mx22urpac9XZ0rLT8SQZ9NkcDkcoFCYQKECcg+hqMQTKJKhWrdGq1YacHJVKBUFQo9XqbnH6vZ6wPxgNRSajsbmRsfnY2EIsthCLrYxNXJqZuTo3f21xaWtlbWtl7fLS6nxsfGlsZm5kYm1iLTYwMdQ36HN3B7t6e91ep8Nhr7cTQCX5hWZTRSqHB4JgApfLJo7dw+rgrYRhWVrdaUNecWG+Xq+HIKi91Xmhp2s4FBoOhSai0ZXJydWpqfXZuZtrq/eWJu5eXr29sXF7Y+Pelau3t16/vbl14+q19fml9fnVS1MLmwub0yNzExfHA57esD8Y7MYN19bstNXVna8wm4zG8pIyJpOJomhCGp+XHj/riJYmXjpatSYv11BSfKai3HjaYJDJZL/89Odf/+HVLz5+MTc+Njc+dmVx8er8ws2VlZVooK+17uFi7NHm1Ud3tr+zfXfvzr0H2/d2bt65vraxtXJ5fXrx0vyVyeGp6dh0yOcf6g+F/cFet9fd1mG3Nlpqamuqq2vNVSwWS6FQJPAFQHq8QCiCe0WjUuZm60oKC0xGY+VZU625KhaNRocGvvzdr199/sv/+vKLn/3d8/WFhZvr67fWL927utFZc7ZUr1Ih4GZ/9/cf7r797b3Hu99+/HB37/63bm9u3Vy/tjo5vzq5PD0yszC+GAn0RcORof5QwNPj7fS0NTuaGpttdXVtza0QBGVmZuI0IIjTYFIiMZhShul0Oru10VxRWWuuaqk/F74Q/PiD/RfvPf/9rz7/6tcvn7355t3r13eubT64sZWnkfus572WihFH3dN7d99+9MbTN77zZBdnun/j1u3LW5emFhYnl+ZGZ5dnlof6BkYHh6KhSMh/odfr63C2tdibCCYulyuTyRIEgjQIOigTJkWUMgx3jww9bTCUl5SVFhdliISYSPTRuz9+unP30w8/+MNvXv72s08e7+w8uLH1+N6d67NjD9aXnr+xd3k0tre++N3t7e/t7r21u/tkd+/+jVvb1+5eX7u6PLM8Nzq7MrsSGxqZGp2MDY2EgyF/V6+n3e20N9nq6symChiG1Wr1AQ0UtzCCiDIz5RIJkpkpz83W5eh1aoWcn5oi5ANP7m3f2Vh58d7zV//y2Ve/efnivedhf7D+nKm+rLCzprLbYm4/Zw40VI+4O8dCQ4+2d777rd3Xl1cmIsO3L29dX92aHplZm10djUQno2Mjg9FwMBTo9seL1dpotdaaqxAE0el0CQDAxWcGnAmEIFAkgmARSNRLDIMiAQ8TQwaDYTI6uD4z+u5bb338wf5vP/tk/69/AIJgCpuBiWGdHCnRKaoL89pMpbkaXV52/uzgxf/+x/2toYBRo4j5AjfXX58cnlqbXY2GItOxsYnhaDgQ6vV2e9o72ppb6+ttteYqGIb1en1CKpfF5bLT+DzCQBAkIKbMdNzagsry4j6Pu6SwMD8/fzY69Pbug/0fvfOrT/55bnyMQqFQqVROCoOZRBelcTNEwox0AcgDBHwoS6t/+b29vpoSS4H+XI5mbmRyNBJdnlkeDsV9E44Eev0el8vT7m6xN1ks9dXVNTAMa7XaBGIOhyCQLwBgEahRybIy8RHufIWxMDfL22rrcjoUCllycnJHo3Xv1o1nT5/84v39fEMuiUSiEDpJYibhc6MkHTylUDIYDFAI1ZaWhTxtbU32Lqdj99bO1FBsemSmotxora+31tfXVteYKypNRmNZSWlV1XnT2SoIgnDfEOOEw+HsHxj2BUIuV5elpjYvS2MsPt3Z2rwwMREMhlQqjUqlKSgomI0O3bu69uD1DSaTSSKRiBGWRieLBDwUEZ1SyBEEYbPZLA67rMy4tbKyff3m/Ru3Hu08/Gj/Z2PRKQAQCPgQDMPJyfggTKfTqVSqUqEqLS0FQRDPDTGsS6XSvv5IeGAsPDDWH4q6vX6j0VRWanQ4Wnu8gZrq2mhs8uLw6Fvv/M2jJ0929h4B/LTExEQajUZ8UaRyWYYsvV6bxefzeTwenccqryyvs1ltNltDQ0N3d/ePnr7z7rPnbW0tHc0OPp9/+M3A4XAIMhqNhp83x44dS4yLRCKR4yI+aNi8tKzs/HRYJJEqBZDoXIOjuz86d+napa3bF4YnHB1uKvmvSH8uKpXKZDLx3DCTYu22/Z/8dOPq1uDg8MhgdHJy+sqVKz95/4ebW+tUKvXwlsTExGNxkUgk/M1w7M9FkBFwh7cdZaVQKGQyWaVSMZnMwz86cZJy4iTlJJ3GZKWwWKzUZFZdXtZH++9rdHpTVXVPT2h6ZGlqdPLJ483Rcby3p0Yne13+xprGu+t3inILiH0hCErA9zr+WuLx1+KbHnAcFZlMxg0bt+qBbSkUrVbLZrP/3ychfiASCrav32Qw6IYsfdAXbnN2Lc1Pz852TE8NffpPP//y1e+//uI/fvdvr+aGpjgcDgiCdDodf4efOHGcREokkY7HF/j1aFBO4hyHC8pJEpV2gliQyeRv0BB5Sk5O5qVyBQAPRSTnK6ptNfaJyLCvw3Vpsa+7v9Tnsw/0+Ls6XZuLK/ev3SrIKSCTyQAAUCgUAAC+SXMUiHKSlEQjM5JOxHP0f0A4E5WamJj42p90lIZKpfK5+IhCpVKRdIhwIZIOKTAMk+JnvSErN0uXg4hEEASRSCTcZywWiUTCZz8aBTcGiZR4lIbYO4lGJhKDYVh2dvYhyokTx6lU6iHKN5iIzhfy+anJLCqVSqfTyWQycSX0DQuTyWSip5hM5mFu8PQc0tAo+K7EOjExkUwm02i0w5IRNfpLmqNMVCqVQqH8pQu/0UqHbiMe438BfXlrfyzL9PsAAAAASUVORK5CYII="
        />
        <IgWindow />
      </div>
    </section>
  );
}
