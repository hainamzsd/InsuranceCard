using InsuranceCardServer.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InsuranceCardServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly motorbike_insuranceContext _context;

        public PaymentController(motorbike_insuranceContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Payment>> GetAllPayments()
        {
            var payments = _context.Payments.ToList();
            return payments;
        }

        [HttpGet("{id}")]
        public ActionResult<Payment> GetPaymentById(int id)
        {
            var payment = _context.Payments.FirstOrDefault(x => x.PaymentId == id);

            if (payment != null)
            {
                return payment;
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult CreatePayment(Payment payment)
        {
            try
            {
                _context.Payments.Add(payment);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetPaymentById), new { id = payment.PaymentId }, payment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePayment(int id, Payment updatedPayment)
        {
            try
            {
                var payment = _context.Payments.FirstOrDefault(x => x.PaymentId == id);

                if (payment == null)
                {
                    return NotFound();
                }

                payment.PaymentDate = updatedPayment.PaymentDate;
                payment.Amount = updatedPayment.Amount;
                payment.PaymentMethod = updatedPayment.PaymentMethod;

                _context.SaveChanges();

                return Ok(payment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePayment(int id)
        {
            try
            {
                var payment = _context.Payments.FirstOrDefault(x => x.PaymentId == id);

                if (payment == null)
                {
                    return NotFound();
                }

                _context.Payments.Remove(payment);
                _context.SaveChanges();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }
    }
}
